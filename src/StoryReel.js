import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story title="Shivraj2224"  
                profileSrc='https://instagram.fbom10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/16229077_168728080282931_6585746892833947648_a.jpg?_nc_ht=instagram.fbom10-1.fna.fbcdn.net&_nc_ohc=Cxe9Hg0MYpoAX9evfFT&oh=74e4f6a6848cb08c22030e415b35194a&oe=5FB71058' 
                image='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'    
            />
            <Story title="Mark Zuckerberg"  
                profileSrc='https://api.time.com/wp-content/uploads/2019/04/mark-zuckerberg-time-100-2019.jpg?quality=85&zoom=2' 
                image='https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/05/SEI_67250300-e1557936653276.jpg?quality=90&strip=all&zoom=1&resize=644%2C769&ssl=1'    
            />
            <Story title="Elon Musk"  
                profileSrc='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102' 
                image='https://specials-images.forbesimg.com/imageserve/5f1f37a40a5db2c8275972c0/960x0.jpg?fit=scale'    
            />
            <Story title="Steve Jobs"  
                profileSrc='https://photos5.appleinsider.com/gallery/product_pages/189-hero.jpg' 
                image='https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/da0a4758f3a9573253cf87d44bf719b0'    
            />
        </div>
    )
}

export default StoryReel
