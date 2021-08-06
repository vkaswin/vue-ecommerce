<template>
    <footer>
        <div class="container-lg">
            <div class="row">
                <div class="col-md-4 footer-links">
                    <b>Get to Know Us</b>
                    <span>About Us</span>
                    <span>Careers</span>
                    <span>Press Release</span>
                    <span>Amazon Cares</span>
                    <span>Gift a smile</span>
                </div>
                <div class="col-md-4 footer-links">
                    <b>Make Money with Us</b>
                    <span>Sell on Amazon</span>
                    <span>Sell under Amazon Accelerator</span>
                    <span>Amazon Global Selling</span>
                    <span>Become an Affiliate</span>
                    <span>Fulfilment by Amazon</span>
                    <span>Advertise Your Products</span>
                    <span>Amazon Pay on Merchants</span>
                </div>
                 <div class="col-md-4 footer-links">
                    <b>Let Us Help You</b>
                    <span>COVID-19 and Amazon</span>
                    <span>Returns Centre</span>
                    <span>100% Purchase Protection</span>
                    <span>Amazon App Download</span>
                    <span>Amazon Assistant Download</span>
                    <span>Help</span>
                </div>
            </div>
            <div class="footer-logo">
                <img :src="logo" alt="logo">
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data(){
        return{
            logo: require('@/assets/images/logo.png')
        }
    }
}
</script>

<style lang="scss" scoped>
    footer{
        background: #232F3E;
        width: 100%;
        height: auto;
        .footer-links{
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 40px 0px;
            b{
                color: white;
            }
            span{
                color: #ddd;
                font-size: 14px;
                cursor: pointer;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
        .footer-logo{
            display: flex;
            justify-content: center;
            align-items: center;
            border-top: 1px solid #3a4553;
            padding: 20px 0px;
            img{
                width: 100px;
                height: 30px;
            }
        }
    }
</style>