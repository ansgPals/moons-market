import * as S from "../productList/productList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { IProductListUI } from "./productList.types";
import { v4 as uuid } from "uuid";

import {
  getDotMoney,
  getTimeForTodayDate,
} from "../../../../commons/library/utils";
import WriteButtonPage from "../../../commons/write-button";
import TopButtonPage from "../../../commons/topButton";

export default function ProductListUI(props: IProductListUI) {
  return (
    <div>
      <WriteButtonPage title="product" />
      <TopButtonPage />
      <S.BackGround>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.CommentScrolling}
          hasMore={true}
          useWindow={true}
        >
          <S.SerchBox>
            <S.SerchDiv>검색으로 더 쉬워지는 마켓</S.SerchDiv>
            <S.SearchInput onChange={props.onchangeSearch}></S.SearchInput>
          </S.SerchBox>
          <S.Contents>
            {props.data?.fetchUseditems.map((el: any) => (
              <div
                key={el._id}
                id={el._id}
                onClick={props.onClickGoProduct(el)}
              >
                <S.MyCard>
                  {el.images[0] ? (
                    <S.CardImage
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  ) : (
                    <S.CardImage src={"/noimg.png"} />
                  )}

                  <S.MyCardContent>
                    <S.ProductName>
                      {el.name
                        .replace(props.keyWord, `!@#$%${props.keyWord}!@#$%`)
                        .split("!@#$%")
                        .map((word: any) => (
                          <S.SearchWord
                            key={uuid()}
                            isMatched={props.keyWord === word}
                          >
                            {word}
                          </S.SearchWord>
                        ))}
                    </S.ProductName>
                    <S.ProductInfo>
                      <S.Remark>{el.remarks}</S.Remark>
                      {getDotMoney(el.price)} 원
                    </S.ProductInfo>
                  </S.MyCardContent>
                  <S.CardButton>
                    <S.PositionRow>
                      <S.Heart />

                      <S.Text> {el.pickedCount}</S.Text>
                    </S.PositionRow>
                    <S.Text>{getTimeForTodayDate(el.createdAt)}</S.Text>
                  </S.CardButton>
                </S.MyCard>
              </div>
            ))}
          </S.Contents>
        </InfiniteScroll>
      </S.BackGround>
    </div>
  );
}
