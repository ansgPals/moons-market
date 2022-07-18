/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "../../../src/commons/library/hocs/useAuth";
import NewProductContainer from "../../../src/components/units/product/newProduct/newProduct.container";

function newProductPage() {
  useAuth();
  return <NewProductContainer isEdit={false} />;
}
export default newProductPage;
