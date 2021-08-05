<template>
    <header>
        <div class="container-lg">
            <div class="row">
                <div class="col-md-2">
                    <router-link :to="{name:'Home'}">
                        <img :src="logo" alt="amazon" class="logo">
                    </router-link>
                </div>
                <div class="col-md-6 search-box">
                    <input type="text" class="">
                    <div class="search-icon">
                        <i class="bi bi-search"></i>
                    </div>
                </div>
                <div class="col-md-4">
                    <router-link :to="{name: 'Cart'}">
                        <div class="cart">
                            <i class="bi bi-cart2"></i>
                            <span class="badge" v-if="count != 0">{{count}}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: ['count'],
    data(){
        return{
            logo: require('@/assets/images/logo.png')
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        position: sticky;
        background: #131921;
        width: 100%;
        height: 50px;
        padding: 30px 0px;
        display: flex;
        align-items: center;
        .logo{
            width: 100px;
            height: 30px;
        }
        .search-box{
            position: relative;
            input{
                width: 100%;
                border: none;
                background: white;
                border-radius: 4px;
                padding: 5px 40px 5px 10px;
                outline: none;
            }
            .search-icon{
                background: #fbbd69;
                border: none;
                width: 50px;
                height: 34px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                position: absolute;
                right: 12px;
                top: 0;
                cursor: pointer;
                i{
                    color: #333;
                    font-weight: bold;
                }
            }
        }
        .cart{
            position: relative;
            width: 30px;
            i{
                color: white;
                font-size: 24px;
            }
            .badge{
                position: absolute;
                top: -2px;
                right: 0;
                background: #f08803;
                color: white;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>