!async function(){const{pathname:n}=location;(n.endsWith(".html")||n.endsWith(".html/"))&&location.replace("/");const a=document.getElementById("root");a.innerHTML='<h1 style="text-align: center; padding: 2rem 1rem;">Loading...</h1>';const e="/"===n?"/view-data":n+"/view-data",t=await fetch(e),{data:s}=await t.json();t.ok?a.innerHTML=`\n        <div class="container">\n            <h2>${s.message}</h2>\n            <h4>Inpokan kalo ada yang emror!</h4>\n            <div class="card-wrapper">\n                <h3>Sources :</h3>\n                ${s.sources.map((n=>`\n                        <div class="card">\n                            <h4>${n.title}</h4>\n                            <p>\n                                <span class="key">Get</span> :\n                                <a href="${n.route}">${n.route}</a>\n                            </p>\n                        </div>\n                    `)).join("")}\n            </div>\n        </div>\n    `:a.innerHTML=`<h1 style="text-align: center; padding: 2rem 1rem;">${t.status} ${t.statusText}</h1>`}();