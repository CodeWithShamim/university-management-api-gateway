import express from 'express';
import { AcademicSemesterRoute } from '../modules/AcademicSemester/AcademicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    routes: AcademicSemesterRoute
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
