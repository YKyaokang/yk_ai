import useTitle from '@/hooks/useTitle'
import { Search,Image } from 'react-vant';
import Cascader from '@/components/Discount/Cascader'
import DateTimePicker  from '@/components/Discount/DateTimePicker';
import styles from './discount.module.css'

const Discount = () => {    
    useTitle('特惠专区')
    return (
        <>
            <div className="container">
                <Search/>
                <Image
                className= {`${styles.pic1}`}
                src='https://ts1.tc.mm.bing.net/th/id/R-C.425b0146242d44475f29acc267acb41e?rik=vshkl4BthLjP3w&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn10113%2f218%2fw640h378%2f20191031%2f8c5e-ihqyuym7908634.jpg&ehk=k240D6FZ4mOS4E%2bZdFoi0BlgjseV5uFSx3f3ETfKsgM%3d&risl=&pid=ImgRaw&r=0'
                width="100%"
                height="300px"
                />
                <Cascader/>
                <DateTimePicker/>
            </div>  
        </>
    )
}
export default Discount;