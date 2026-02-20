
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import PageContainer from './container/PageContainer'
import Drawer from '@mui/material/Drawer';
import { MdDeleteForever } from "react-icons/md";
import { calculateBasket, setDrawer } from './redux/slices/basketSlice'
import { useEffect } from 'react'


function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch(); // draver ı kapatmak için false yapmamız lazım

  useEffect(() => {
    dispatch(calculateBasket())
  }, [])

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer open={drawer} anchor='right' onClose={() => { dispatch(setDrawer()) }}>
          {
            products && products.map((product) => {
              return (
                <div>
                  <div className='flex-row' style={{ padding: '20px' }}>
                    <img style={{ marginRight: "5px" }} src={product.image} width={100} height={100} alt={product.title} />
                    <p style={{ width: "320px", marginRight: "5px" }}>{product.title} ({product.count})</p>
                    <p style={{ fontWeight: 'bold', marginRight: '10px' }}>{product.price}₺</p>
                    <MdDeleteForever size={32} style={{ color: "red", cursor: 'pointer' }} />
                  </div>
                </div>
              )
            })
          }
          <div>
            <p>Toplam tutar:{totalAmount} ₺</p>
          </div>

        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
