import styled from "@emotion/styled";

export const Back = styled.div`
  padding-top: 10rem;
  width: 100rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #a275e0;
  margin-bottom: 5rem;
`;
export const BackGround = styled.div`
  width: 80rem;
  border-bottom: 1px solid #a275e0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 2rem;
`;
export const LeftBody = styled.div`
  margin-right: 2rem;
  width: 32rem;
  height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 3px solid #a275e0;
  border-radius: 3rem;
`;

export const RightBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 2rem;
`;
export const TopBack = styled.div`
  width: 30rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TopLeft = styled.div`
  width: 30rem;
  height: 5rem;
  border-top: 1px solid #a275e0;
  border-bottom: 1px solid #a275e0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const ProFilePhoto = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  margin-left: 1rem;
`;
export const NameDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const Name = styled.div`
  font-size: 1.5rem;
  height: 1.8rem;
  margin-right: 1rem;
  line-height: 2rem;
`;
export const Date = styled.div`
  font-size: 1.5rem;
  height: 1.8rem;
  line-height: 2rem;
  color: #828282;
`;

export const ResponseDataBox = styled.div`
  width: 30rem;
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleBox = styled.div`
  width: 30rem;
  max-height: 8rem;
  font-size: 2rem;
  font-weight: bold;
  line-height: 8rem;
`;
export const PriceBox = styled.div`
  width: 30rem;
  height: 10rem;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  font-weight: bold;
`;
export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const IMG = styled.img`
  width: 30rem;
  max-height: 30rem;
  object-fit: contain;
`;
export const TitleIMG = styled.img`
  width: 30rem;
  max-height: 30rem;
  object-fit: contain;
`;
export const RemarkBox = styled.div`
  margin-top: 2rem;
  width: 30rem;
  font-size: 2rem;
`;
export const ProductButtonBox = styled.div`
  margin-top: 2rem;
  width: 40rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const MyButton = styled.button`
  width: 20rem;
  height: 5rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  cursor: pointer;

  border-radius: 1rem;

  border: none;
  font-size: 2rem;

  margin-bottom: 2rem;
  font-weight: bold;
  color: #6519cf;
  background-color: white;
  border: 1px solid #bdbdbd;
  :hover {
    color: white;
    background-color: #6519cf;
  }
`;

export const DetailTitle = styled.div`
  width: 15rem;
  height: 5rem;
  border: 0.3rem solid #bdbdbd;
  text-align: center;
  font-size: 2rem;
  line-height: 4.5rem;
  border-radius: 1.5rem;
  margin-bottom: 2rem;
`;
export const DetailBox = styled.div`
  width: 80rem;
  padding: 5rem;
  padding-bottom: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductDetailBox = styled.div`
  width: 80rem;
  padding: 5rem;
  display: flex;
  font-size: 2.5rem;
  flex-direction: column;
  justify-content: center;
`;

export const NoHeartIcon = styled.div`
  background-image: url("/whiteheart.png");
  margin-left: 3rem;
  height: 5rem;
  width: 5rem;
  background-size: cover;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 5rem;
  font-size: 2rem;
  color: black;
  :hover {
    background-image: url("/heart.png");
    color: white;
  }
  cursor: pointer;
`;
export const HeartIcon = styled.div`
  background-image: url("/heart.png");
  margin-left: 3rem;
  height: 5rem;
  width: 5rem;
  color: white;
  background-size: cover;
  margin-bottom: 1rem;
  text-align: center;
  line-height: 5rem;
  font-size: 2rem;

  :hover {
    color: black;
    background-image: url("/whiteheart.png");
  }
  cursor: pointer;
`;
export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2rem;
  margin-right: 2rem;
  width: 30rem;
`;
export const Tag = styled.div`
  font-size: 1.8rem;
  border-radius: 1rem;
  padding: 0px 1rem;
  margin-top: 0.5rem;
  margin-right: 1rem;
  border: #bdbdbd 1px solid;
  cursor: pointer;
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
