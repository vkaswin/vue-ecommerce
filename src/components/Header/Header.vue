<template>
    <header>
        <div class="container-lg">
            <div class="row">
                <div class="col-md-2">
                    <router-link :to="{name:'Home'}">
                        <img :src="logo" alt="amazon" class="logo">
                    </router-link>
                </div>
                <div class="col-md-6 p-0">
                    <Search />
                </div>
                <div class="col-md-4">
                    <div class="header-icons">
                        <div class="badge">
                            <i class="bi bi-bell"></i>
                            <span v-if="count != 0">{{count}}</span>
                        </div>
                        <router-link :to="{name: 'Cart'}">
                            <div class="badge">
                                <i class="bi bi-cart2"></i>
                                <span  v-if="count != 0">{{count}}</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Search from '@/components/Header/Search'

export default {
    name: "Header",
    components: {
        Search
    },
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
        position: fixed;
        top: 0;
        left: 0;
        background: #131921;
        width: 100%;
        height: 50px;
        padding: 30px 0px;
        display: flex;
        align-items: center;
        z-index: 3;
        .logo{
            width: 100px;
            height: 30px;
        }
        .header-icons{
            display: flex;
            gap: 15px;
            .badge{
                position: relative;
                width: 30px;
                cursor: pointer;
                i{
                    color: white;
                    font-size: 24px;
                }
                span{
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
        
    }
</style>