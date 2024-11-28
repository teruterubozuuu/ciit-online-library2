import React from 'react'
import "./Catalog.css"
import book1 from "../images/book1.jpg"
import book2 from "../images/book2.jpg"
import book3 from "../images/book3.jpg"
import book4 from "../images/book4.jpg"
import book5 from "../images/book5.jpg"

export default function Catalog() {
  return (
    <>
    <div className='catalog-container'>
    <div className='page-numbers'>
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>Next</li>
                <li>Last</li>
            </ul>
        </div>

    </div>
        {/*
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Type
                        </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Genre
                        </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort By
                        </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Location and Availability
                        </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <button className='nav-link filterBtn'>Filter</button>
                    </li>
            </ul>
        */}
        <div class="filter-container">
            <select>
                <option value="0">Type</option>
                <option value="1">Books</option>
                <option value="2">Mixed Materials</option>
                <option value="3">Thesis</option>
                <option value="4">Computer Files</option>
                <option value="5">eBook</option>
                <option value="6">Maps</option>
                <option value="7">Music</option>
                <option value="8">Maps</option>
                <option value="9">Serial Articles</option>
                <option value="10">Visual Materials</option>
            </select>
            <select>
                <option value="0">Genre</option>
                <option value="1">Fiction</option>
                <option value="2">Non-Fiction</option>
                <option value="3">Mystery</option>
                <option value="4">Fantasy</option>
                <option value="5">Science Fiction</option>
                <option value="6">Biography</option>
                <option value="7">Historical Fiction</option>
                <option value="8">Romance</option>
                <option value="9">Thriller</option>
            </select>
            <select>
                <option value="0">Sort By</option>
                <option value="1">Price: Low to High</option>
                <option value="2">Price: High to Low</option>
                <option value="3">Newest First</option>
                <option value="4">Oldest First</option>
                <option value="5">Rating: High to Low</option>
                <option value="6">Rating: Low to High</option>
                <option value="7">Alphabetical: A-Z</option>
                <option value="8">Alphabetical: Z-A</option>
                <option value="9">Popularity</option>
            </select>
            <select>
                <option value="0">Location and Availability</option>
                <option value="1">All libraries</option>
                <option value="2">CIIT College of Arts and Technology</option>
                <option value="3">CIIT Senior High School</option>
                <option value="4">LAB 302</option>
                
            </select>
            <button className='filterBtn'>Filter</button>
        </div>     
    </div>


            
    <div className='catalog-content-parent'>
        <div className='catalog-content-child'>
            <div className='book-container'>
                <img src={book1} alt="the maze runner" className='book1'/>
                <div className='book-content'>
                    <h2>Abstract and Colour Techniques in Painting / Claire Harrigan</h2>
                    <p>By Harrigan, Claire</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    <div style={{marginTop:"10px"}}></div>
                    <p> Material type: Text; Format: print ; Literary form: Not fiction </p>
                    <p><em>Summary:</em> "In this inspirational workbook, award-winning mixed media artist Claire Harrigan leads painters towards non-representational painting through the use of color. Fantastically illustrated throughout and featuring sound technical advice, it covers every aspect of abstract painting, from concepts and influences, inspirations and starting points to approaching subjects, basic design considerations, and surface textures. Step-by-step analyses of Harrigan's own work demonstrate the importance of color contrast, harmony, and impact in a range of mixed media."
                    </p>
                </div>
            </div>

            <div className='book-container'>
                <img src={book2} alt="the maze runner" className='book1'/>
                <div className='book-content'>
                    <h2>Learning PHP, MySQL & JavaScript : with jQuery, CSS & HTML5 / Robin Nixon. </h2>
                    <p>By Nixon, Robin</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    <div style={{marginTop:"10px"}}></div>
                    <p> Material type: Text </p>
                    <p><em>Content:</em> Introduction to dynamic web content -- Setting up a development server -- Introduction to PHP -- Expressions and control flow in PHP -- PHP functions and objects -- PHP arrays -- Practical PHP -- Introduction to MySQL -- Mastering MySQL -- Accessing MySQL using PHP -- Form handling -- Cookies, sessions, and authentication -- Exploring JavaScript -- Expressions and control flow in JavaScript -- JavaScript functions, objects, and arrays -- JavaScript and PHP validation and error handling -- Using Ajax -- Introduction to CSS -- Advanced CSS with CSS3 -- Accessing CSS from JavaScript -- Introduction to jQuery -- Introduction to HTML5 -- The HTML5 canvas -- HTML5 audio and video -- Other HTML5 features -- Bringing it all together.
                    </p>
                </div>
            </div>

            <div className='book-container'>
                <img src={book3} alt="the maze runner" className='book1'/>
                <div className='book-content'>
                    <h2>The Black Art of Multiplatform Game Programming / Jazon Yamamoto. </h2>
                    <p>By Yamamoto, Jazon</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    <div style={{marginTop:"10px"}}></div>
                    <p> Material type: Text </p>
                    <p><em>Content:</em>Setting up your workstation -- Entering the digital domain -- Tapping into the world of graphics -- Interacting with the matrix -- Blasting music and sound effects -- Your first playable video game -- Rethinking the paddle game -- Designing a game engine -- Crafting levels with tile maps -- Forging worlds with scene management -- Inside the mass production zone with factories and scripts -- The final frontier -- SDL 2.0 and the future.</p>
                </div>
            </div>
            <div className='book-container'>
                <div><img src={book4} alt="the maze runner" className='book1'/></div>
                <div className='book-content'>
                    <h2>The Walking Dead Volume 19 / Robert Kirkman.  </h2>
                    <p>By Kirkman, Robert</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    <div style={{marginTop:"10px"}}></div>
                    <p> Material type: Text </p>
                    <p><em>Abstract:</em> While Rick takes the group to the Kingdom, Negan takes the opportunity to start a war.</p>
                </div>
            </div>
            <div className='book-container'>
                <div><img src={book5} alt="the maze runner" className='book1'/></div>
                <div className='book-content'>
                    <h2>Whoosh! : 250 ways to get motion into your drawings / Carlos Gomes-Cabral.</h2>
                    <p>By Gomes-Cabral, Carlo</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    <div style={{marginTop:"10px"}}></div>
                    <p> Material type: Text </p>
                    <p><em>Summary:</em> "The best cartoonists jam-pack their work with action that moves the story along. So how do you capture this kind of motion in your work? Whoosh! 250 Ways to Get Motion into Your Drawings can help. Cartoonist and illustrator Carlos Gomes Cabral shares his tips and tricks to help you create attention-grabbing drawings that practically leap off the pages. It's all in the details: sometimes simplicity, rhythm, the position of a shadow, the use of a speed line, or even an exaggerated expression can make all the difference. Cabral walks you step-by-step through 250 fantastic techniques, including: * The importance of a good silhouette * Using lines of action to help create the character's gestures * How to use basic shapes to suggest movement * The best positions to increase drama in a scene * How to tell a compelling narrative with art alone And if all that isn't enough, ten great artists share their trademark secrets for bringing their own drawings to life! Whether you work digitally on a computer or at a drawing table with a good old-fashioned pencil, this book will help you develop the skills you need to create movement and drama--and take your dynamic drawing skills to a whole new level." </p>
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}
