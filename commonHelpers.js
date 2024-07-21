import{S as d,i as c}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const h="43901454-2f0f1ad212df2deb6dd93021b",u=s=>{const r=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(t=>{if(!t.ok)throw new Error("Error fetching data");return t.json()}).catch(t=>{throw console.error("Error fetching images",t),t})},f=(s,r)=>{r.innerHTML="";const t=s.map(e=>`
    <li class="card">
      <a class="card-link" href="${e.largeImageURL}">
        <img class="card-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="main-content">
        <ul class="card-list">
          <li class="card-list-li">
            <h3>likes</h3>
            <p>${e.likes}</p>
          </li>
          <li class="card-list-li">
            <h3>views</h3>
            <p>${e.views}</p>
          </li>
          <li class="card-list-li">
            <h3>comments</h3>
            <p>${e.comments}</p>
          </li>
          <li class="card-list-li">
            <h3>downloads</h3>
            <p>${e.downloads}</p>
          </li>
        </ul>
      </div>
    </li>
  `).join("");r.insertAdjacentHTML("beforeend",t),new d(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}).refresh()},p=document.querySelector("#search-form"),m=document.querySelector("#search-input"),n=document.querySelector("#loader"),l=document.querySelector("#gallery");p.addEventListener("submit",s=>{s.preventDefault();const r=m.value.trim();if(!r){c.show({title:"❌",message:"Please enter a search query.",messageColor:"white",backgroundColor:"#E25757",position:"topRight"});return}n.style.display="block",l.innerHTML="",u(r).then(t=>{const i=t.hits;i.length>0?f(i,l):c.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}).catch(t=>{console.error("Error fetching images",t),c.show({title:"❌",message:"Sorry, check your internet connection!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}).finally(()=>{n.style.display="none",s.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
