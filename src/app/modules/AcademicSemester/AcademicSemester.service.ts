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

const updateAcademicSemester = async (req: Request): Promise<any> => {
  const id = req.params.id;
  const response = await HTTPService.patch(`/academic-semester/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const AcademicSemesterService = {
  createAcademicSemester,
  updateAcademicSemester
};
