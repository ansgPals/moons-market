import styled from "@emotion/styled";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Slider from "react-slick";

const ReactSlick = styled(Slider)`
  width: 170rem;
  height: 51rem;
  min-width: 80rem;
  margin-top: 2rem;
  margin-bottom: 10rem;
`;

interface IBackProps {
  backImage?: string;
  level?: string;
}
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  height: 51rem;
  margin-left: 10rem;
  justify-content: space-between;
  align-items: center;
`;
const SlickWrapper = styled.div`
  display: flex;
  min-width: 80rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ProductImage = styled.div`
  background-image: ${(props: IBackProps) =>
    `url(https://storage.googleapis.com/${props.backImage})`};
  background-color: red;
  width: 50rem;
  min-width: 50rem;
  height: 50.666rem;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Title = styled.div`
  margin-top: 10rem;
  width: 50rem;
  border-bottom: 1px solid #7050c7;
  text-align: center;
  color: black;
  font-size: 4rem;
  margin-bottom: 1.6rem;
`;
const SubTitle = styled.div`
  max-width: 50rem;
  color: black;
  font-size: 2.5rem;
`;

const DetailButton = styled.button`
  width: 50rem;
  height: 8rem;
  cursor: pointer;
  background: black;
  border-radius: 1rem;
  border: none;
  color: white;
  font-family: "SUIT700";
  font-size: 2.5rem;
  margin-bottom: 4rem;
  :hover {
    background-color: #7050c7;
  }
`;

export default function WaitingCardSlider({
  data,
}: {
  data: Array<{
    contents?: string;
    createdAt?: string;
    deletedAt?: null;
    images?: string[];
    name?: string;
    pickedCount?: number;
    price?: number;
    remarks?: string;
    soldAt?: null;
    tags?: string[];
    updatedAt?: string;
    __typename?: string;
    _id?: string;
  }>;
}) {
  const settings = {
    centerMode: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 5000,
    autoplay: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <ReactSlick {...settings}>
        {data?.map((el, i) => (
          <div key={i}>
            <SlickWrapper>
              <ProductImage backImage={el?.images?.[0]}></ProductImage>
              <DetailBox>
                <div>
                  <Title>{el?.name}</Title>
                  <SubTitle>{el?.remarks}</SubTitle>
                </div>
                <DetailButton>더 알아보기</DetailButton>
              </DetailBox>
            </SlickWrapper>
          </div>
        ))}
      </ReactSlick>
    </div>
  );
}
