/* Facades Calc */
//Cloning tabs and the input field
  let facadeTabs = document.querySelector('.facade_tabs'),
    facadeTab = document.querySelector('.facade_tab'),
    facadeInputs = document.querySelector('.facade_inputs'),
    facadeInput = document.querySelector('.facade_input'),
    num = 1;

  function addTab() {

    for(let i = 1; i <= 1; i++) {
      num += i;

      let facadeTabNew = facadeTab.cloneNode(true);
          facadeTabNew.querySelector('p').innerHTML = 'Фасад №' + num;
          facadeTabNew.querySelector('.facade_tab_cop').id = 'facade_tab_cop' + num;
          facadeTabNew.querySelector('.count').name = 'count' + num;
          facadeTabNew.querySelector('.count').id = 'count' + num;
          facadeTabNew.querySelector('.count').value = 1;
          facadeTabNew.querySelector('.plus').id = 'plus' + num;
          facadeTabNew.querySelector('.minus').id = 'minus' + num;

          facadeTabNew.removeAttribute('js_tab');
          facadeTabNew.setAttribute('data-tab-name', 'js_tab' + num);
          facadeTabNew.setAttribute('class', 'facade_tab tabImg' + num);

        let facadeInputNew = facadeInput.cloneNode(true);
          facadeInputNew.querySelector('.js_input1').name = 'facadeMaterial' + num;
          facadeInputNew.querySelector('.js_input2').name = 'facadeView' + num;
          facadeInputNew.querySelector('.js_input3').name = 'facadeType' + num;
          facadeInputNew.querySelector('.js_input4').name = 'facadePaint' + num;
          facadeInputNew.querySelector('.js_input5').name = 'facadeLenght' + num;
          facadeInputNew.querySelector('.js_input6').name = 'facadeWidth' + num;
          facadeInputNew.querySelector('.js_input5').value = '';
          facadeInputNew.querySelector('.js_input6').value = '';

          facadeInputNew.classList.remove('js_tab1');
          facadeInputNew.classList.add('js_tab' + num);

      facadeTabs.append(facadeTabNew);
      facadeInputs.append(facadeInputNew);
    }
    if(num >= 5) facade_btn.style.display = 'none';
  }
  facade_btn.addEventListener("click", addTab);

  // Adding images above the calculator

  function addImgInTop() {
    let visionImg2 = document.querySelector('.vision_img-2'),
        visionImg3 = document.querySelector('.vision_img-3'),
        visionImg4 = document.querySelector('.vision_img-4'),
        visionImg5 = document.querySelector('.vision_img-5'),
        facadeTabs = document.querySelectorAll('.facade_tab');

    for (let facadeTab of facadeTabs) {
      if (facadeTab.classList.contains('tabImg2')) {
        visionImg2.classList.add('is_active');
      }
      if (facadeTab.classList.contains('tabImg3')) {
        visionImg3.classList.add('is_active');
      }
      if (facadeTab.classList.contains('tabImg4')) {
        visionImg4.classList.add('is_active');
      }
      if (facadeTab.classList.contains('tabImg5')) {
        visionImg5.classList.add('is_active');
      }
    }
    
  }
  facade_btn.addEventListener("click", addImgInTop);
  
  // Tabs navigation

  let tab = function () {
      let tabNav = document.querySelectorAll('.facade_tab'),
          tabContent = document.querySelectorAll('.facade_input'),
          tabName;

      tabNav.forEach(item => {
          item.addEventListener('click', selectTabNav)
      });

      function selectTabNav() {
          document.querySelector('.facade_inputs > .facade_input:nth-last-child(1)').style.display = 'none';
          tabName = this.getAttribute('data-tab-name');
          selectTabContent(tabName);
      }

      function selectTabContent(tabName) {
          tabContent.forEach(item => {
              item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
          })
      }
  };

  // Restart script after adding a new tab
  facade_btn.addEventListener("click", tab);

  //When click on "Add facade" button, remove is-active class from all inputs
  facade_btn.onclick = function(e){
    for(let i = 0; i < facadeInputs.children.length; i++){
      facadeInputs.children[i].classList.remove('is-active');
    }
  }

  //Facade calc counter

  let countFacade = function() {
    let countBlocks = document.querySelectorAll('.facade_tab_cop');
        

    for (let countBlock of countBlocks) {
      countBlock.addEventListener('click', function funcSome(event) {
        let eTargClass = event.target.className,
            count = this.querySelector('.facade_tab_cop .count');

        if (eTargClass == 'plus') {
          count.value++;
        }

        if (eTargClass == 'minus') {
          count.value--;

          if (count.value <= 0) {
            count.value = 1;
          } 
        }
      });      
    }

  }
  countFacade();
  facade_btn.addEventListener('click', countFacade);

/* End Facades Calc */
