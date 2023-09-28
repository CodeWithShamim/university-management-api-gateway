import { Request } from 'express';
import { CoreService as HTTPService } from '../../../shared/axios';

const createAcademicSemester = async (req: Request): Promise<any> => {
  const response = await HTTPService.post('/academic-semester', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const AcademicSemesterService = {
  createAcademicSemester
};
