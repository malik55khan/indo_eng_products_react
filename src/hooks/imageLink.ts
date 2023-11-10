import { ApiEndPoint } from "../services/env"

export const getThumbImage = (image: string) => {
    if (!image?.length) return "";
    let splitedImage = image.split("/");
    let fileName = splitedImage.pop()
    return ApiEndPoint.replace('api', '')+splitedImage.join('/')+'/thumb_'+fileName
}
export const getRealImage = (image: string) => ApiEndPoint.replace('api', '')+image
