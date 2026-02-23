import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import RouterConfig from "./config/RouterConfig";
import PageContainer from "./container/PageContainer";
import Drawer from "@mui/material/Drawer";
import { MdDeleteForever } from "react-icons/md";
import {
  calculateBasket,
  setDrawer,
  removeFromBasket,
} from "./redux/slices/basketSlice";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const { products, drawer, totalAmount, isDeleted } = useSelector(
    (store) => store.basket,
  );
  const dispatch = useDispatch(); // draver ı kapatmak için false yapmamız lazım

  //Sepetten çıkarma işlemi:
  const removeProductFromBasket = (producId) => {
    dispatch(removeFromBasket(producId));
    dispatch(calculateBasket());
    if (isDeleted) {
      toast.success("Silinme işlemi Başarılı", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: 'Bounce',
      });
    } else {
      toast.error("Silinme işlemi başarısız oldu", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: 'Bounce',
      });
    }
  };

  useEffect(() => {
    dispatch(calculateBasket());
  }, []);

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          open={drawer}
          anchor="right"
          onClose={() => {
            dispatch(setDrawer());
          }}
        >
          {products &&
            products.map((product) => {
              return (
                <div>
                  <div className="flex-row" style={{ padding: "20px" }}>
                    <img
                      style={{ marginRight: "5px" }}
                      src={product.image}
                      width={100}
                      height={100}
                      alt={product.title}
                    />
                    <p style={{ width: "320px", marginRight: "5px" }}>
                      {product.title} ({product.count})
                    </p>
                    <p style={{ fontWeight: "bold", marginRight: "10px" }}>
                      {product.price}₺
                    </p>
                    <MdDeleteForever
                      size={32}
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => {
                        removeProductFromBasket(product.id);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          <div>
            <p>Toplam tutar:{totalAmount} ₺</p>
          </div>
        </Drawer>
        <ToastContainer/>        
        
      </PageContainer>
    </div>
  );
}

export default App;
