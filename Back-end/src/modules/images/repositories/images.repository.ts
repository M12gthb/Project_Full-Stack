import { CreateImagenDto } from '../Dto/create-images.dto';
import { UpdateImageDto } from '../Dto/update-images.dto';
import { Images } from '../entities/images.entity';

export abstract class ImagesRepository {
  abstract create(
    data: CreateImagenDto,
    anouncementId: string,
  ): Promise<Images>;
  abstract update(data: UpdateImageDto, anouncementId: string): Promise<Images>;
  abstract findImages(anouncementId: string): Promise<Images[]>;
}
