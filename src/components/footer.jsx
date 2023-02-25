import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
const Footer = () => {
    return (
        <div className="footer">
            <MDBFooter bgColor='dark' className='text-center text-white text-lg-left mt-5'>
                <MDBContainer className='py-5'>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size='auto' className='mb-4 mb-md-0'>
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                                <MDBInput className='rounded-0' type='text' id='form5Example2' placeholder='email address' contrast />
                            </MDBCol>

                            <MDBCol size='auto' className='mb-4 mb-md-0'>
                                <MDBBtn outline color='light' className='rounded-0'>
                                    Subscribe
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </MDBContainer>

                <div className='text-center py-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    Copyright &copy; {new Date().getFullYear()} All rights reserved |{' '}
                    <a className='text-white' href='#'>
                        Foodie.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer;