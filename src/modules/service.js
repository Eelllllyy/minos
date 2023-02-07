import { ref } from 'vue'
export const navbarVisible = ref(false)
export const openNavbarMobile = () => {
  navbarVisible.value = !navbarVisible.value
  console.log(navbarVisible.value)
}
export const scrollTo = (id) => {
  console.log(id)
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  if (navbarVisible.value){
    navbarVisible.value = false
    setTimeout(() => (  document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })),100) 
  }
}