<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/myAccount">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/exercises">Exercises</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active" to="/search">Search</router-link>
            </li>
        </ul>
    </nav>
</template>