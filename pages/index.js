import Link from 'next/link'
import HeaderLayout from '../components/HeaderLayout'
import Slider from '../components/Slider';

const Index = (props) => (
    <div>
    	<HeaderLayout head/>
      <Slider top = {200} left = {20} height = {400} width = {600} /> 
      {/* //values are all adjustable */}

      <Slider top = {300} left = {800} width = {200} height =  {300}/>
      <Slider top = {10} left = {20} height = {400} width = {600} /> 
      {/* //values are all adjustable */}

      <Slider top = {100} left = {800} width = {200} height =  {300}/>
    </div>
  )
  
  export default Index
