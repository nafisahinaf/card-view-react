import React, { Component } from 'react'; //import dari react biasa
import { Layout, Row, Col, Modal, head } from 'antd'; //import dari ant seperti biasa
import '../assets/css/landing.css' //import css dari folder css yang ada di folder assets
import Navbar from '../common/layout/navbar-landing' //import komponen navbar dari folder layout yang ada di folder common 
import ButtonHome from '../common/component/button/button-home'; //import komponen buttonhome yang ada di dalamn folder component yang ada di folder common
import Title from 'antd/lib/skeleton/Title';


const { Content } = Layout; // membuat konstanta content yang berasal dari bawaan layout ant design, bisa dicek di dokumentasi antdesign

class LandingComponent extends Component{
    render(){
        const image1 = require(`../assets/images/1.jpg`); 
        const image2 = require(`../assets/images/2.jpg`); 
        //membuat variabel image 1 dimana isinya merupakan importan gambar yang ada dari folder images
        const {initialData,showModal,handleOk,handleCancel} = this.props; {/* ini merupakan fungsi" yang sudah di definsiikan di landing-page.js 
        kemudian kita panggil di halaman landing-component.js ketika kita memamnggil komponent dari parent komponen, komponen yang dipanggil
        akan menjadi sebuah properti, kemudian kita dapat menggunakan properti itu dihalaman ini.
        */}
        return(
            <Layout className="landing-container">
                {/* <Navbar/>  ini merupakan component navbar yang kita import dari folder layout yang ada di common */}
                <Content style={{ overflow: "hidden" }}> {/* ini merupakan component content yang sudah di define sebelumnya*/}
                    <Row className="section-container">
                       <Col lg={8} md={8} sm={8}>
                            <Row>
                                <Col span={24}>
                                    <div className="site-logo">
                                    <span className="text-black title-biggest bold">I N A F</span>
                                    <p>Tugas Praktikum Web 3</p>
                                    </div>
                                    <div className="title-container">
                                        <span className="text-black title-big bold">My name is Nafisah Karimah</span>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    { <div className="image-hidden">
                                        <img
                                            src={image1}
                                            alt="Home 1"
                                            style={{maxWidth: '100%'}}
                                        />
                                    </div> }
                                    <div className="description-container desc-medium">
                                        Saya akan berbagi beberapa kegiatan yang dapat mengisi waktu selama quarantine atau self-distancing
                                        agar tetap produktif dan bahagia. And if u wondering u can also see my github or hit me at : 
                                        <br/>
                                       
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="button-section-1-container">                                
                                        <ButtonHome
                                            text="Show Me"
                                            className='button-participate'
                                            onClick = {showModal}
                                        />{/* ini merupakan component button yang kita sudah definisikan di atas atas nama buttonhome*/}
                                        <ButtonHome
                                            text="Another Information"
                                            background="white"
                                            textColor="#3282b8"
                                            border="1px solid #3282b8"
                                            marginLeft={16}
                                            className='button-participate'
                                        />
                                    </div>
                                </Col>
                                <Modal
                                    title="Contact"
                                    visible={initialData.visible}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    className = "modal-notif"
                                    >
                                    <p className="text-notif">Anda dapat mengirimkan atau bertanya di vickyhermawan99@mail.ugm.ac.id</p>
                                </Modal>{/* ini merupakan modal yang didalamnya memuat beberapa fungsi yang sudah di definisikan di atas sebagai this.props*/}
                            </Row>
                        </Col>
                       
                      
                        <Col lg={8} md={8} sm={8}>
                            <div className="image-big-container">
                                <img
                                    src={image1}
                                    alt="Home 1"
                                    style={{maxWidth: '80%'}}
                                />
                            </div>
                        </Col>  
                        <Col lg={8} md={8} sm={8}>
                            <div className="image-big-container">
                                <img
                                    src={image2}
                                    alt="Home 1"
                                    style={{maxWidth: '80%'}}
                                />
                            </div>
                        </Col>  
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default LandingComponent;