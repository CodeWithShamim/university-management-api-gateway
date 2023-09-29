import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { AcademicSemesterService } from './AcademicSemester.service';
import sendResponse from '../../../shared/response';
import { Request, Response } from 'express';

const createAcademicSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.createAcademicSemester(req);

  sendResponse<any>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created successfully',
    data: result
  });
});

const updateAcademicSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.updateAcademicSemester(req);

  sendResponse<any>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester updated successfully',
    data: result
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  updateAcademicSemester
};
