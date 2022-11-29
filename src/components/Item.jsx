import React, { Component } from 'react';
import { useLocation,useParams } from 'react-router-dom'


// Online link
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

// Header
import Header from './checkItems_header';

// Star
import Star from './star'

// CSS
import '../static_files/item.css'


class Item extends Component {
    
    state = {  } 

    componentDidMount(){
        this.setState(this.props,()=>{
            // console.log(this.state.data)
        })
    }



    render() { 
        
        return (
            <div className='Container'> 
                <Header />
                <div className="item-main">
                    <p className="item-main-round-1"></p>
                    <p className="item-main-round-2"></p>

                    <div className='item-main-data'>
                        <div className='item-main-data-photo'>
                            {
                                console.log(this.props.data)
                            }
                            <img src={this.props.data.photoName} width='450px' height='450px'/>
                        </div> 
                        <div className='item-main-data-details'>
                            {/* <input type='' className='item-main-data-details-productName' defaultValue={this.props.data.productName}/> */}
                            <textarea className='item-main-data-details-productName' defaultValue={this.props.data.productName}></textarea>
                            <textarea className='item-main-data-details-productType' defaultValue={this.props.data.productType}></textarea>
                            {/* <input type='' className='item-main-data-details-productType' defaultValue={this.props.data.productType}/> */}
                            
                            <div></div>
                            <Star />
                            <br />
                            <br />
                            {/* <p>Price</p> */}
                            <span>Price : <input type='' className='item-main-data-details-price' defaultValue={this.props.data.price}/></span>
                            
                            <div></div>
                            <p>See more:</p>
                            <p className='item-main-data-details-weight'>weight: <input></input></p>
                            
                        </div>
                    </div>
                    <span className='main-save-reset-btn'>
                            <button className='main-save-reset-btn-1' onClick={this.saveData}>Save</button>
                            <button className='main-save-reset-btn-2' onClick={this.resetData}>Reset</button>
                        </span>
                </div>
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis recusandae, ex unde, corporis expedita saepe, quo neque deserunt cum ad id dicta debitis accusamus veniam quis placeat. Vero at impedit dolor quis quidem expedita reprehenderit unde, nobis nostrum aut nam itaque! Quas rerum ullam fuga beatae nam ut, temporibus itaque consequuntur deserunt, vero error iusto. Perferendis praesentium quia officiis nihil est blanditiis, non dolorem quasi reiciendis perspiciatis cum cumque inventore harum autem quos, facilis deleniti placeat amet, natus doloremque vero accusamus voluptatum! Optio similique, tempore dolor et illum cumque laboriosam eos accusamus tempora nihil fugiat exercitationem minima atque dolorum repellat ex officia ea facilis aut voluptatum quis minus neque alias a! Rerum veritatis eligendi pariatur? Asperiores debitis reiciendis sunt, qui neque vitae tempora sint veritatis eum, nostrum ab, doloribus earum ipsum reprehenderit aut perspiciatis dolore facilis odio distinctio vero sapiente corrupti quisquam. Debitis fugiat totam quia quos dolorem enim, tenetur accusamus placeat, magnam saepe, eveniet maiores sapiente nemo neque molestias! Quod maiores, ut nesciunt facilis nihil cum rem soluta illo expedita atque laborum deleniti modi odio consequatur non et dolore iusto reiciendis dolorum laboriosam! Pariatur, dolores! Repudiandae perferendis et ullam! Similique deserunt perspiciatis facere nostrum cumque doloribus asperiores minima eius autem magni deleniti praesentium id placeat eos quia vel modi, necessitatibus aspernatur quos accusamus minus ut saepe fugit accusantium? Veniam corporis natus autem illum est recusandae ipsa voluptatum veritatis, quia eaque. Impedit quidem fugit, at repellendus nostrum tempora dolores, molestiae harum adipisci explicabo sed vitae eius dolore aperiam. Assumenda cupiditate quibusdam maiores repellendus soluta iure eveniet ipsam, commodi, laborum atque rerum ab laudantium tenetur expedita sequi corrupti quam id. Ea consequuntur, earum voluptas quam pariatur iste! Dolorum quia dolorem, eligendi molestias atque perspiciatis porro ratione, qui tempora mollitia asperiores eum, quidem dolore sapiente dicta soluta. Suscipit maiores numquam ex impedit quidem laudantium illum aliquid, enim eos veritatis ut, nam mollitia dolore deleniti, soluta natus quos asperiores vel. Quo sed ipsum magni impedit nobis expedita temporibus numquam veniam esse nesciunt accusamus laborum provident reiciendis ducimus, illum aliquam sunt voluptatem excepturi maxime facere, ut et sequi minus. Architecto magnam harum animi? Harum nostrum sed accusantium hic, dolores officiis quis sunt quasi tenetur, maiores nisi excepturi? A necessitatibus ab architecto ducimus voluptatum aperiam obcaecati, cupiditate sint quo, saepe commodi explicabo ipsam voluptas dolore, minima et aspernatur assumenda enim fugit? Dolore architecto quibusdam quaerat eveniet? Dolore consequuntur quo et sunt sint architecto culpa minus rerum hic. Facere minima possimus eaque inventore quas architecto mollitia aliquid quasi enim assumenda itaque distinctio vel tempore, obcaecati minus deserunt aspernatur laborum at corporis et cupiditate! Doloremque libero excepturi, reiciendis commodi placeat sed, illo veritatis adipisci nemo suscipit natus? Ducimus, quaerat cupiditate! Voluptas voluptatibus illo ipsum? Mollitia tempore nulla labore non nostrum corrupti harum, modi praesentium totam, quia adipisci odio? Accusantium molestias veritatis fugit saepe dolor nulla quasi, non laudantium temporibus deserunt quas et ipsa dolorem sed optio quis fugiat a excepturi, doloremque, perferendis quidem dolore impedit assumenda. Possimus, neque delectus nobis laudantium quis doloribus hic magnam, aliquam, distinctio deleniti nemo nihil cum? Nam dignissimos alias nostrum eveniet! Odit, quos similique totam voluptate provident earum neque illum unde assumenda ipsum saepe et at laborum beatae aliquam ipsam in atque, eum non tempore iste debitis? Culpa hic unde perferendis recusandae repellat illum quibusdam explicabo laudantium facilis commodi similique ex quis quos tenetur impedit magni nemo voluptas expedita harum dolorum tempore ea, quidem ab. Velit, unde nostrum cumque laudantium dicta, aliquam animi accusantium commodi eligendi architecto tempora fugit non? Harum in repudiandae quasi delectus dolor, asperiores ratione laudantium impedit accusamus nulla aliquid reiciendis, et esse? Delectus, placeat? Modi iure quas fugiat placeat nam magni, quam sed pariatur praesentium deleniti voluptate libero vero ipsum consequatur illum a in quibusdam molestias beatae. Possimus dolorem itaque quo suscipit iusto non! Libero, praesentium dicta tempore odio numquam unde hic neque, maxime sint similique fugit id quos fuga iste nisi impedit ea deleniti aut nostrum. Voluptatibus laudantium, a illum, similique neque ea quia alias nesciunt, veritatis ab sed? Expedita aliquam omnis amet repellat? Harum aut quia non quos consequatur! Dignissimos iste excepturi dolorum voluptas culpa atque incidunt, ratione odit maxime voluptatibus vero facilis sapiente corrupti aliquid illum ullam praesentium distinctio officiis facere assumenda quia quas voluptate temporibus dolores! Vel debitis veniam nostrum, suscipit totam ipsum ea sunt voluptatem? Accusantium quos maxime corrupti, itaque neque voluptatem amet non corporis dolorum modi optio, at, cum earum? Aliquid tempore eos animi? Eum autem, unde, ducimus quisquam reprehenderit non distinctio perferendis atque natus alias rem? Asperiores quia itaque ipsum hic omnis, sequi quidem delectus nisi porro quisquam, deserunt minima, culpa sit fuga praesentium. Consequuntur deleniti vero laudantium amet quibusdam aliquam laboriosam consequatur. Labore velit iusto modi cum nam consectetur nobis corporis amet architecto mollitia? Reprehenderit repellat ipsa saepe, quidem accusamus nobis officia culpa quas est qui consectetur animi suscipit nulla architecto, quibusdam incidunt cupiditate accusantium id eaque nesciunt corrupti rerum sed sint? Beatae nihil aliquid error repellat assumenda ipsam quaerat voluptatum culpa vel, enim, neque iste reiciendis illum perferendis, blanditiis excepturi maiores quia fuga esse magni explicabo officia. Atque voluptate blanditiis cupiditate minus incidunt praesentium officiis, harum eum dolorem veniam illum asperiores a impedit quaerat culpa perferendis tempora laborum nostrum architecto sequi eaque? Provident, dolor? Qui error, hic minus harum quas sunt fugit id dolor consequuntur quae quia placeat illo exercitationem, neque perferendis aliquid molestiae animi est voluptate excepturi praesentium suscipit? Earum, provident expedita veniam illum officia at ad magni repellendus quaerat ex explicabo quibusdam alias molestias debitis libero unde dignissimos sint reprehenderit quidem incidunt accusantium nemo recusandae dolores? Sequi consectetur quidem pariatur eos, deserunt harum veniam officiis numquam consequuntur dolorum libero. Suscipit magnam minus similique! Ducimus sed provident eveniet fuga sunt tempora consequatur inventore expedita minus explicabo velit dolor officiis unde libero sequi consequuntur voluptatum molestiae, blanditiis quos ipsum? Impedit et corporis quam consectetur iste fuga, est cumque ea debitis consequuntur, voluptates at ipsam quidem atque ut eligendi labore veniam rerum pariatur? Molestiae, fugiat possimus blanditiis quia, omnis delectus dolor harum exercitationem aliquid ipsum accusamus itaque. Vel, et? Veniam?
                </div>
                    
            </div>
        );
    }
}
 
export default function(props){
    // const data = JSON.parse(useLocation().state.itemData.user);
    const data=JSON.parse(useLocation().state.itemData).item
    return <Item data={data} />;
};;