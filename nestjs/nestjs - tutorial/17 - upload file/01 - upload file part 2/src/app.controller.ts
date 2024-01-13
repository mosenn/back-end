import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { resolve } from 'path';
import { join } from 'path';

import path = require('path');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/upload')
  // * add object for option
  @UseInterceptors(
    FileInterceptor('image', {
      //* storge for save image
      storage: diskStorage({
        destination: resolve(__dirname, '../', 'uploads'),
        filename: (req, file, cb) => {
          const filename = path.parse(file.originalname).name;
          const extension = path.parse(file.originalname).ext;
          return cb(null, `${filename}-${Date.now()}${extension}`);
        },
      }),
      //* fileFilter for (.png , .pdf , .jpeg) and so on ..
      fileFilter: (req, file, cb) => {
        const extension = path.parse(file.originalname).ext;

        if (extension !== '.png') {
          return cb(new BadRequestException('must be pngs'), false);
        }

        return cb(null, true);
      },
      limits: { fileSize: 2000000 },
    }),
  )
  uploadFile(
    @Body() body: any,
    // @UploadedFile(
    //   //* have bug get us error but img is be uploaded
    //   new ParseFilePipe({
    //     validators: [new MaxFileSizeValidator({ maxSize: 1000 })],
    //   }),
    // )
    @UploadedFile()
    image: Express.Multer.File,
  ) {
    console.log(body, image);
    return { message: 'your file is uploaded' };
  }

  @Post('/Multiupload')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'avatar', maxCount: 1 },
        { name: 'background', maxCount: 1 },
      ],
      {
        //* storge for save image
        storage: diskStorage({
          destination: resolve(__dirname, '../', 'uploads'),
          filename: (req, file, cb) => {
            const filename = path.parse(file.originalname).name;
            const extension = path.parse(file.originalname).ext;
            return cb(null, `${filename}-${Date.now()}${extension}`);
          },
        }),
        //* fileFilter for (.png , .pdf , .jpeg) and so on ..
        fileFilter: (req, file, cb) => {
          const extension = path.parse(file.originalname).ext;
          console.log(file, 'file');
          if (extension === '.png' || extension === '.jpeg') {
            return cb(null, true);
          }

          return cb(new BadRequestException('must be png or jpeg'), false);
        },
        limits: { fileSize: 2000000 },
      },
    ),
  )
  uploadMultiFiles(
    @UploadedFiles()
    files: {
      avatar?: Express.Multer.File[];
      background?: Express.Multer.File[];
    },
  ) {
    console.log(files);
  }

  //* this take image new add for part2 upload
  @Get('/image/:imagename')
  showImage(@Param('imagename') imgename: string, @Res() res) {
    const imagePath = join(__dirname, '..', 'uploads', imgename);
    return res.sendFile(imagePath);
  }
}
