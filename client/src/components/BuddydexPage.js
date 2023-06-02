import "../buddydex.css";
import "../buddydex.js";


const BuddydexPage = () => {
  return (
    <div class="buddy_cont">
      <div>
        <button class="return">
          <a href="farm">
            <b>⇦</b>
          </a>
        </button>
          
        <div class="buddy_wrapper">
          <h1 class="buddy_h">PETS</h1>
          <div id="pets" class="pets">
            <div id="pet" class="pet">
              <div class="row">
                <div class="pet-container">
                    <div id="pet1" class="pet">
                        
                    </div>
                </div>
                <div class="pet-container">
                    <div id="pet2" class="pet">
                        
                    </div>
                </div>
                <div class="pet-container">
                    <div id="pet3" class="pet">
                        
                    </div>
                </div>
                <div class="pet-container">
                    <div id="pet4" class="pet">
                        
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="buddydex.js"></script>
    </div>
  );
};
export default BuddydexPage;
