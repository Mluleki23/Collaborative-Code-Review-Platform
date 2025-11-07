import { Response } from "express";
import { findUserById, updateUser, deleteUser } from "../models/userModel";
import { AuthRequest } from "../middleware/checkAuth";

export const getUserProfile = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id ? parseInt(req.params.id) : req.user?.id;

    if (!userId) {
      res.status(400).json({ error: "User ID required" });
      return;
    }

    const user = await findUserById(userId);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    // Users can only view their own profile or reviewers can view any profile
    if (req.user?.id !== userId && req.user?.role !== "reviewer") {
      res.status(403).json({ error: "Access denied" });
      return;
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      profile_picture: user.profile_picture,
      created_at: user.created_at,
    });
  } catch (error) {
    console.error("Get user profile error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUserProfile = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = parseInt(req.params.id);

    if (!userId) {
      res.status(400).json({ error: "User ID required" });
      return;
    }

    // Users can only update their own profile
    if (req.user?.id !== userId) {
      res.status(403).json({ error: "Access denied" });
      return;
    }

    const { name, email, role, displayPicture } = req.body;
    const updates: any = {};

    if (name) updates.name = name;
    if (email) updates.email = email;
    if (role && ["reviewer", "submitter"].includes(role)) updates.role = role;
    if (displayPicture !== undefined) updates.profile_picture = displayPicture;

    if (Object.keys(updates).length === 0) {
      res.status(400).json({ error: "No valid fields to update" });
      return;
    }

    const updatedUser = await updateUser(userId, updates);
    if (!updatedUser) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        profile_picture: updatedUser.profile_picture,
      },
    });
  } catch (error) {
    console.error("Update user profile error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUserAccount = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = parseInt(req.params.id);

    if (!userId) {
      res.status(400).json({ error: "User ID required" });
      return;
    }

    // Users can only delete their own account
    if (req.user?.id !== userId) {
      res.status(403).json({ error: "Access denied" });
      return;
    }

    const deleted = await deleteUser(userId);
    if (!deleted) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Delete user account error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
