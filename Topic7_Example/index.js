
// const API_URL = "https://blog-api-t6u0.onrender.com/posts";
//     const blogList = document.getElementById("blogList");
//     const blogForm = document.getElementById("blogForm");

//     async function fetchBlogs() {
//       blogList.innerHTML = "";
//       const response = await fetch(API_URL);
//       const blogs = await response.json();

//       blogs.reverse().forEach(blog => {
//         const col = document.createElement("div");
//         col.className = "col-md-4 mb-4";

        
//         col.innerHTML = `
//           <div class="card h-100 shadow-sm">
//             <div class="card-body">
//               <h5 class="card-title">${blog.title}</h5>
//               <p class="card-text">${blog.body}</p>
//             </div>
//             <div class="card-footer text-end">
//               <button class="btn btn-danger btn-sm" onclick="deleteBlog('${blog.id}')">
//                 Delete
//               </button>
//             </div>
//           </div>
//         `;

//         blogList.appendChild(col);
//       });
      
//     }



//     blogForm.addEventListener("submit", async (e) => {
//       e.preventDefault();

//       const title = document.getElementById("title").value;
//       const body = document.getElementById("body").value;

//       await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ title, body })
//       });

//       blogForm.reset();
//       fetchBlogs();
//     });

//     async function deleteBlog(id) {

//       await fetch(`${API_URL}/${id}`, {
//         method: "DELETE"
//       });

//       fetchBlogs();
//     }

//     fetchBlogs();



 const API_URL = "https://blog-api-t6u0.onrender.com/posts";
    const blogList = document.getElementById("blogList");
    const blogForm = document.getElementById("blogForm");

    async function fetchBlogs() {
      blogList.innerHTML = "";
      const res = await fetch(API_URL);
      const blogs = await res.json();

      [...blogs].reverse().forEach(blog => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
          <div class="card blog-card h-100">
            <div class="card-body">
              <h5 class="blog-title">${blog.title}</h5>
              <p class="blog-body">${blog.body}</p>
            </div>
            <div class="card-footer bg-transparent border-0 text-end">
              <button class="btn btn-outline-danger btn-sm delete-btn" onclick="deleteBlog('${blog.id}')">
                Delete
              </button>
            </div>
          </div>
        `;

        blogList.appendChild(col);
      });
    }

    blogForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body })
  });

  blogForm.reset();
  fetchBlogs();
});


    async function deleteBlog(id) {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchBlogs();
    }

    fetchBlogs();