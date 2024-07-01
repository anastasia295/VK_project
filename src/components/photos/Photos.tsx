import { Area } from "../../ui/Area";
import { Button } from "../../ui/Button";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Img } from "../img/Img";
import { MainPage } from "../mainPage/MainPage";
import { StyledPhotosСontainer, StyledPhotos } from "./Photos.styled";
import uploadPhoto from "../../components/img/img/photo-upload.png";
export function Photos() {
  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledPhotosСontainer>
          <Area mt="20px" ml="20px">
            <Text fs="18px">Мои фотографии</Text>
          </Area>
          <Area mt="20px">
            <Flex display="flex" justifycontent="space-between">
              <Flex display="flex" gap="15px">
                <Area ml="25px">
                  <Text fs="14px">Фото</Text>
                </Area>
                <Text fs="14px">Альбомы</Text>
              </Flex>
              <Flex display="flex">
                <Area mr="20px">
                  <Button
                    pl="20px"
                    br="5px"
                    fw="600"
                    fs="14px"
                    width="160px"
                    height="28px"
                  >
                    Загрузить фото
                  </Button>
                </Area>

                <Area position="absolute" ml="10px" mt="4px">
                  <Img width="25px" height="20px" src={uploadPhoto}></Img>
                </Area>
              </Flex>
            </Flex>
          </Area>
          <StyledPhotos></StyledPhotos>
        </StyledPhotosСontainer>
      </Flex>
    </MainPage>
  );
}
