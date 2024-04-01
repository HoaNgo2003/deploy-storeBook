import Header from "../../../compoment/header.jsx";
import Footer from "../../../compoment/footer.tsx";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hook.ts";
import { useEffect } from "react";
import { getAllProduct } from "../../../redux/Reducer/ProductSlice.ts";
import IChuyenMuc from "../../../interface/chuyenMuc.ts";
import { getAllChuyenMuc } from "../../../redux/Reducer/ChuyenMuc.ts";
import './index.scss';

const homePage = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.Product.products);
    const chuyenmucs = useAppSelector((state) => state.ChuyenMuc.chuyenmuc);

    const optionChuyenmuc=  chuyenmucs
    ?.filter((chm: IChuyenMuc) => chm.name !== "Uncategorized"); 
    console.log("tessttt",optionChuyenmuc);
    const Sach = products.filter((sp) => {
        const danhMucItem = chuyenmucs.find((dm) => dm._id === sp.chuyenMucId);
        console.log("mmm",danhMucItem);
        return danhMucItem?.name === "Sách tiểu thuyết mới phát hành";
      });
    console.log("getPro",Sach);
    const newComic = products.filter((sp) => {
        const danhMucItem = chuyenmucs.find((dm) => dm._id === sp.chuyenMucId);
        console.log("mmm",danhMucItem);
        return danhMucItem?.name === "Truyện mới nổi bật";
      });
    console.log("getPro",Sach);
    


    


    useEffect(() => {
        // setIsLoading(true);
        dispatch(getAllProduct())
        dispatch(getAllChuyenMuc())

    }, [dispatch]);

    useEffect(() => {
        // setIsLoading(true);
        dispatch(getAllChuyenMuc())

        dispatch(getAllProduct())

    }, []);

    return <>
        <div className="wrapper">
            <Header />
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-header d-flex justify-content-between align-items-center position-relative">
                                    <div className="iq-header-title">
                                        <h4 className="card-title mb-0">Gợi ý cho bạn</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <Link to={`/products`} className="btn btn-sm btn-primary view-more">Xem Thêm</Link>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="row">
                                        {products.map((product) => {
                                            return <>
                                                <div className="col-sm-6 col-md-4 col-lg-3">
                                                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height browse-bookcontent">
                                                        <div className="iq-card-body p-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="col-6 p-0 position-relative image-overlap-shadow">
                                                                    <Link to=""><img className="img-fluid rounded w-100" src={product.images} alt="" /></Link >
                                                                    <div className="view-book">
                                                                        <Link to={`/products/${product._id}`} className="btn btn-sm btn-white">Mua Ngay</Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="mb-2">
                                                                        <h6 className="mb-1">{product.name}</h6>
                                                                        <p className="font-size-13 line-height mb-1">{product.author}</p>
                                                                        <div className="d-block line-height">
                                                                            <span className="font-size-11 text-warning">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price d-flex align-items-center">
                                                                        <h6><b>{product.price} đ</b></h6>
                                                                    </div>
                                                                    <div className="iq-product-action">
                                                                        <Link to="#"><i className="ri-shopping-cart-2-fill text-primary"></i></Link>
                                                                        <Link to="#" className="ml-2"><i className="ri-heart-fill text-danger"></i></Link>
                                                                    </div>
                                                                </div>
                                                            </div >
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-header d-flex justify-content-between align-items-center position-relative">
                                    <div className="iq-header-title">
                                        <h2 className="card-title mb-0" style={{color:"green", fontSize:"1.5rem", fontWeight:"bolder"}}>Truyện mới nổi bật</h2>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <Link to="category.html" className="btn btn-sm btn-primary view-more">Xem thêm</Link>
                                    </div>
                                </div>
                                <div className="iq-card-body favorites-contens">
                                    <ul id="favorites-slider" className="list-inline p-0 mb-0 row">
                                        {newComic.map((item)=>{
                                            return <>
                                                <li className="col-md-4 ">
                                                    <div className="d-flex align-items-center">
                                                        <div className="col-5 p-0 position-relative">
                                                            <Link to="#">
                                                                <img src={item.images} className="img-fluid rounded w-100" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="col-7">
                                                            <h5 className="mb-2">{item.name}</h5>
                                                            <p className="mb-2">Tác giả : {item.author}</p>
                                                    
                                                        
                                                             
                                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                                        <div className="iq-progress-bar iq-bg-danger">
                                                            <span className="bg-danger" data-percent="45"></span>
                                                        </div>
                                                    </div>
                                                            <Link to={`/products/${item._id}`} className="text-danger">Mua ngay<i className="ri-arrow-right-s-line"></i></Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            
                                            </>
                                        })}
                                       
                                       
                                    
                                      
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                       
                   
                        <div className="col-lg-12">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-header d-flex justify-content-between align-items-center position-relative">
                                    <div className="iq-header-title">
                                        <h2 className="card-title mb-0" style={{color:"green", fontSize:"1.5rem", fontWeight:"bolder"}}>Truyện mới phát hành</h2>
                                    </div>
                                    <div className="slider-truyenmoi">
                                    {/* <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                            </li>
                                        </ul>
                                        </nav> */}
                                    </div>
                                </div>
                                <div className="iq-card-body favorites-contens">
                                    <ul id="favorites-slider" className="list-inline p-0 mb-0 row">

                                        {Sach.map((item)=>{
                                            return <>
                                                <li className="col-md-4 ">
                                                    <div className="d-flex align-items-center">
                                                        <div className="col-5 p-0 position-relative">
                                                            <Link to="#">
                                                                <img src={item.images} className="img-fluid rounded w-100" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="col-7">
                                                            <h5 className="mb-2">{item.name}</h5>
                                                            <p className="mb-2">Tác giả : {item.author}</p>
                                                    
                                                        
                                                             
                                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                                        <div className="iq-progress-bar iq-bg-danger">
                                                            <span className="bg-danger" data-percent="45"></span>
                                                        </div>
                                                    </div>
                                                            <Link to={`/products/${item._id}`} className="text-danger">Mua ngay<i className="ri-arrow-right-s-line"></i></Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                    
                                               
                                            </>
                                        })}
                                       
                                       
                                    
                                      
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-body favorites-contens">
                                <div className="iq-header-title">
                                        <h2 className="card-title mb-3" style={{color:"green", fontSize:"1.5rem", fontWeight:"bolder"}}>Truyền thông</h2>
                                    </div>
                                <div className="section-share section-about">
                        
                                    <div className="section-about-content">
                                        <div className="content-left">
                                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/qrvlgbNG89U?si=-Ibf5Udn-tutuANo"  title="Journaling Prompts to Change Your Life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                        <div className="content-right">
                                        Bộ sách thiết thực này là kết hợp giữa những minh họa trực quan cao độ và chủ đề giáo dục trọng yếu. Tất các cuốn sách trong bộ đều có Phần câu hỏi thảo luận để hỗ trợ phụ huynh khơi gợi và dẫn dắt những cuộc trò chuyện với trẻ về cảm xúc, nỗi lo lắng, thất bại, sự tử tế, bảo vệ thân thể, bình đẳng giới và đa dạng giới, Bộ sách là công cụ 
                                        giúp trẻ nói lên tiếng nói của mình và khuyến khích trẻ tham gia chủ động, tích cực vào việc học hỏi.
                                        </div>
                                    </div>
                                </div>
                                  
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    </>
}
export default homePage;