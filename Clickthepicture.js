import React, { Component, useState } from 'react'
import './Clickthepicture.css'
export class Clickthepicture extends Component {
    constructor(){
        super()
        this.state={
            time:18,
            count:0,
            msg:''
        }
    }
    incrementCounter=() =>{
        if(this.state.time!==0)
             this.setState({
                 count :this.state.count+1
            })
         }
        
        restart=()=>{
            this.setState({
                count:0,
                time:18,
                msg:''
               
    
        })
        this.interval=setInterval(this.tick,1000)
        
        } 
    componentDidMount(){
        this.interval=setInterval(this.tick,1000);
    }
   componentWillUnmount(){
        clearInterval(this.interval)
    }
    tick=()=>{
        if(this.state.time==0)
        {
           
            clearInterval(this.interval)
            this.setState({ 
                msg:"Enough! I can't be beaten by you"
            })
           
        }
        else{
        this.setState({
            time:this.state.time-1
        })
       }
    }
    
   
       

      render() {
       return (
      <div id="background">
        <h1>Click the Hulk picture as many times as you can in {this.state.time} seconds...</h1>
        <img  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIsATgMBIgACEQEDEQH/xAAbAAADAQADAQAAAAAAAAAAAAADBQYEAQIHAP/EADsQAAIBAwMBBgQDBQcFAAAAAAECAwAEEQUSITEGEyJBUYEyYXGRFKHwIzNSwdEHQoKSseHxFSRDYnL/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBBQAG/8QAHxEAAgMAAwEAAwAAAAAAAAAAAQIAAxEEEiExE0FR/9oADAMBAAIRAxEAPwCXhgzgYplbWW4guuB5Ua0tgME9acwWuVGQK+Stvycpni+O1IPA4rdpelSXN2nh3KTyKaWmlySMARsTGSxHlTIazYaPC/4aAysnDucDHrSqybD9yEi76Y20XREiALAjA8JArnVdGjlLbY8ehqYT+0ESyCJmVWbO3n5UBe21wkmBIpbOFUgHJ/rVhpq6dMO/2UamZkxavozxO2AaUx2WS251RVB5bPPHlV0msWutRd3dwqky8OyMMg+o9aQ67p/cJGYxujcZVh/eqY9kPUnYlhnySsgGT6UGRQcYrXPEEJXBBHrWZ1IOOKeDMEqLOz3AEZxT2wtN5AxWbT1GwU0Ev4a2uJuB3UZY1xmYu/WIQdjEXajXV0yAwwnrnJHlXnV32kvC8rCVjHNncuMCtWvXhupDv5ySTzU+yS3N1FbQlQ0rhF3HAyTxmvouHQqqAZciiabO3v8AUWZrC2kk2/EQQgHy3E4zz0rs1prtvILs2zkR+LOVcDPHQH51q7XSC1UadYER2dvkGMEne/QlvX7VOWl3JbzLLDJLG6jw7HKsDnyI6V1Vq7LojQI9g7QXUZbJZZg+TnPXnP8Ax8qr+zPaKTUYW0u98Ubfu5T1RvL71DaoFmjtr8LGr3G4TBM8uDktgk9QR04zmvtLuXtrhCrsi9GK9cZqTkcdGUjPYDKCJZ6kjiYKyqpQbeBjp5n50sdhmmV3OtzCtwjZDrnP5UqbrXLr3MMmE9BsWAC0XVxI+kXghVmkMfCqMk8g9Pal9hMXKIgy7EBR6mrdLeOxiWMMGmI8TeprmVUM1vYfqDxqmsbyeRQdiO0GqyeC3itQ3I/FuUJ/wgEj3AqmsP7PtC0cxy6tdS314jAja5ijRs9QAc/c+1UGq3a6PHJOkjSNN1wOU/2rzTVNWu9Tll7ovsB5k/h/3+Vd5S7DF8nR6Kkcavp2gQ26/wDXHdLmcF4Q2RlTnClgMZz8/vUJZWumJrMX4iX/ALZm8SryVzx5frFXk9wl7o2kQW8jK0TBQvdGRjsOQvQgA+Z9vpHQSyPrZu7nuw/esWdY9oB3Fs8jqD5efSreOWIJmHweTYdOsi0Wlao1wsiM7CSHA2HgHwkcg7fUfWvpexmpIjXGm7dRtQeXgOHX5NGec/8AzuHzpFc6082tXF27PJuc7WY58PlTnSNQvGMvcKzRsuJEx19D9R1r1quDoPkXhm+2Ro9NjjkVlcZyrDBHiPUUIxmriBV1G0hXV4kfen7OVRh1Hlz/ACPFIb7S3s7uW2l+KM4yBww8j7iuTZqEmT2KU+xp2e/aSmdCCtqvfOfTHT3Joep9r4oWmkWXdIThBn9fKhW2ox6PpENvnw3h71pPNuDgD5bdv+avNdcnS4vZZYxsLMTheB9qo4vFUyilPxr5+5WXXaO+1d/wdtG0rtxhRn7+lfXehTaPDHMtyskrcyqPh+nzFJez2vRWNm0MC7Jj+9c8lvT2rdNqqXALzysf/QDrVRrZWxRghkwf42eNGCYxgh0bJVvrgg9amVkuSjRIhAdzubJJ+nJpzPMm0FQoJ6nPNUD2lmdJtHTu9xBzlMZ5+9MFn4x8+z2yVsdOVnBkB45xRfx76VckR8ZOQfWt97NDbr4SMgeVTGpXAdi7nHPhHrTK9c+zB7Li07YkiGN2XZ0OPL51Vz3I1WCC7UglV7pm+nI/I14pZjvJELuVUkZ+Qr0rRNXXs9btbW0puBJh1bg8Y5zn2qbl8RWXqv2DZWHHXZg7f6lLDqyRkqIkhIhRRgJknj/WoZpd7dcmn3aOO41ed7lQdi8A+ZonZW2srSFbu5Ae4LHZuGQgHGQPXOeacHWmnsfTCd8GxdP2fv7SxXUZQYwSBsIO4A/xUO3ju5+YUaQjyA5qv17U459GuULB84PP1FSGnXVxb3Mf4aUAhgVB6E+hoeNdZbWWcexdLsyktO8llemNpJYmjQAHLnGcnHH5/atk97eJbQx92e7VPA3qDzR9U1a7vYRHcbMLn92QFrJLNH3arIZzhcdQQPy/Km+kDsIcXzXErZLkk130jRLzX7x4Lbb3qxs/jOAAPL6k4HvWOWTJPHFeg9g7yzsNFleVJDLJNy6egA4P3oeVc9FJdB7BtYomiedSLLazPDMjxyRnayMMFSPIimemu90+xJShRT4vtxVN24Wz1W7tbyJTHtQxyMy8sc5XPtmp6DTppZmSwikZgMkKM8UVV4uqDEYYSP3XYyutQRoUCBhLJxImMc+oPpWcSiCFE6bRxivprRFswg3GSIby3XAPBX6dMe/rWeCDv5grPsRRudz0RR1P688UpgD5BYAznVZ3TSZXY47092obrnIz9qnoZSGya26i4vLpmVSsSeGJM9F/qepPmTQRbAKG28Hjr5/o1XUqouRigKIczAqCpx6jNAmueRgk/LNdxbeinpmhPCBg+HPPHOfejAWb5BsWPwnr1yKoOyt7JEJLZLho5mbeg3EbxgAgfPjp50usII5J171QFBJP9KobpLaa0EcMYR15BVQMfSgtVbF6mBYQRkNqN1c39r+HubqWSLO4BmzhvWl9pNqenK0drLOoc7g8LFd4888jp9a3B/xFolw20S5KTDp4x0P+Ic/UGg3MrrMhjDMixhFGfc49yT7ioagayUiq/DkErySBmkULlcHAxk/Sg6gGt9NAQ4/FOVbH8K4P5k/lT2x0+FlD3F1t3DG2NSW9z0FKe0qQJeRW0COkcaDAbnGetZXYGswTyPrZESKefnRu7P8A4x9xzWqCE95thJfPAKgjI+lHaDbmNGXeRxuHLfL61WWEaWil5ZHkYrkueuATQXyDtYEE888U/S0MEBjRfGeXb19fast1Z7oTn94vK5/0rFuUnJgcEwNqvRl8h6VvjdsqxHB6HGc1htJTHgYyrDOMc8daZW0cLmLDM28ZKgfDyen2/OjY5MadpYZred4WwEni3EbgSGBz08jjd96GY8YDKGA6A+VMr+zS3lgO87+75UqcjKnr8+cVicBZGVX3gf3gpGfY1K7adi9jKJSExnJ6jB4NKNSYvqE3BKgjALZAPGfr5inku2KNivUAkA0l4KncfLIOOppNB9LQa/uzgyG3JREG8Dk9a1WUJMIuc/tWJAJGcDpWKMDcAeMHmqjT4zFYQl1G1s7CCORwf50V7lVhWHBFdpK8byKzfGOgOAcc/rpQZx307S7WwTnnqKbS2wK+A9PKszRKrFVbOOpxikCwH0RYI+xBqFusfczoijLEMoPx4wST98UOCbuVWUnxZwBu5GMfr2NUmu6en4GyeN1B7v8AaAjrlic+wOPapu6SPlYQ2FJ8Tn4hnjjy4q2pwyiPX0ZGcN+lxJG3xbnDOS3K4OSfemMtuybkkZm8ZOWHPHHX2qbs1AOCu7njAqucyRup7494UXd5YO0E+2SftSOR5mRbjJx3efEyErg45xmldxZhAQgYBx8WeOo8vpTaQk9SeBxRruNBaR4UeJBn8zU6OVMBThk0lv8ADkMX3EH0I4xj8/yqjRi8cKEKixxhRnoPnS90XanhHT+dMkA7u44HEYxx05WiuYkCa52BBBYLkKCeWxnFcNGZBIIUMgU7t+3BAGfL9dKIigxNkelDBK/CSPLg4pKjT5Agrtu+gIKABQAoDfCM/r70oeBTwOf4uPPNUUKKO+cDxRrlT6HcKXFQBwKdW+eQ1aZbW1/bxIACWIwBTZ/FuzgknOaDCdgDJwwcEEdQaPPwxxxzWWEkzGOz/9k="onClick={this.incrementCounter}/>
        <h2 id="count">Your Score {this.state.count}</h2>
        <h3 id="msg">{this.state.msg}</h3>
        {this.state.time==0 &&
            <button onClick={this.restart}>Restart </button>
        }
      </div>
    )
  }
}

export default Clickthepicture