import { Router } from 'express';
import { getUserProfile, updateUserProfile, deleteUserAccount } from '../controllers/userControllers';
import { authenticateToken } from '../middleware/checkAuth';

const router = Router();

// All user routes require authentication
router.use(authenticateToken);

// GET /api/users/:id - Get user profile (own profile or reviewer viewing others)
router.get('/:id', getUserProfile);

router.get('/', getUserProfile);

// PUT /api/users/:id - Update user profile (only own profile)
router.put('/:id', updateUserProfile);

// DELETE /api/users/:id - Delete user account (only own account)
router.delete('/:id', deleteUserAccount);

export default router;