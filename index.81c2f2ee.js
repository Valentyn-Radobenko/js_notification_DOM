function e(e,t,n,i,a){var o=document.createElement("div");o.className="notification ".concat(a),o.style.top="".concat(e,"px"),o.style.right="".concat(t,"px");var s=document.createElement("h2");s.classList.add("title"),s.textContent=n,s.style.fontSize="18px";var c=document.createElement("p");i.split("\n").forEach(function(e){var t=document.createElement("p");t.style.margin="0",t.textContent=e.trim(),c.appendChild(t)}),o.appendChild(s),o.appendChild(c),document.body.appendChild(o),setTimeout(function(){o.style.visibility="hidden"},2e3)}e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.81c2f2ee.js.map
