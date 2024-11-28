import React from 'react'
import book1 from "../images/book1.jpg"

export default function Catalog1() {
  return (
    <div className='book-container'>

    <img src={book1} alt="the maze runner" className='book1'/>
    <div className='book-content'>
                    <h2>Abstract and Colour Techniques in Painting / Claire Harrigan</h2>
                    <p>By Harrigan, Claire</p>
                    <div style={{marginTop:"10px"}}></div>
                    <p> Material type: Text; Format: print ; Literary form: Not fiction </p>
                    <p><em>Summary:</em> "In this inspirational workbook, award-winning mixed media artist Claire Harrigan leads painters towards non-representational painting through the use of color. Fantastically illustrated throughout and featuring sound technical advice, it covers every aspect of abstract painting, from concepts and influences, inspirations and starting points to approaching subjects, basic design considerations, and surface textures. Step-by-step analyses of Harrigan's own work demonstrate the importance of color contrast, harmony, and impact in a range of mixed media."
                    </p>
                    <p>Leave a Rating</p>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    <input type="textfield" /> <button style={{border:"none", backgroundColor:"#47C8F5"}}>Submit</button>
                </div>
    </div>
  )
}
