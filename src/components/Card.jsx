import React from 'react'

const Card = () => {
  return (
    <div className="card">
      <img src="https://png.pngtree.com/background/20230520/original/pngtree-2-kittens-sitting-on-a-black-background-picture-image_2671016.jpg" alt="고양이" width="500"/>
      <h2>냥💖💓💗</h2>
      <p>나만없어 고양이! </p>
    </div>
  )
}

//jsx 사용규칙
//1. 형제 태그가 있으면 최상위에서(=부모태그 필요) 한번은 감싸줘야됨(빈태그 <> </>로 라도 감싸야됨)
//2. 태그 안에 값이 없을때는 셀프클로징 태그를 사용한다. <comp> </comp> => <comp />
//3. <div class=""> => <div className=""> : html과 다르게 사용하는 유일한 이름
//4. html코드에서 자바스크립트를 사용할때는 중괄호를 사용함. 
//5. 컴포넌트명은 pascalCase, 내부 코드는 camelCase를 사용함.※카멜케이스: 두번째 단어는 대문자. 파스칼케이스: 첫글자 부터 대문자.

export default Card