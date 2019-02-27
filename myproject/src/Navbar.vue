<template>
    <nav>
        <h2>Menu</h2>
        <ul>
            <li><a href="">Menu 1</a></li>
            <li><a href="">Menu 2</a></li>
            <li><a href="">Menu 3</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {

        }
    }
}
</script>


<style>

    nav{
        text-align: center;
    }

    nav ul {
        padding: 0;
    }

    nav li{
        display: inline-block;
        list-style-type: none;
        margin:0;
    }

</style>
