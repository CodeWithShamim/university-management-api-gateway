import Express, { Router } from 'express';
import { AcademicSemesterController } from './AcademicSemester.controller';
const router: Router = Express.Router();

router.post('/', AcademicSemesterController.createAcademicSemester);

export const AcademicSemesterRoute = router;
