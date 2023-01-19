export function createModalLogin() {
    const modalHTML = `
    <dialog class="modal_container">
        <div class="modal_style">
          <div class="dialog_header">
            <img id="fechar" class="login__close--button" src="./src/assets/Vector.svg" alt="close">
          </div>
          <form class="form__container">
            <h2>Login</h2>
            <input type="email" name="email" class="inputLogin" placeholder="E-mail">
            <input type="password" name="password" class="inputLogin" placeholder="Senha">
            <button type="submit" class="btnLogin">Entrar</button>
            <span>Não tem cadastro? <span class="link">Clique aqui</span> para se cadastrar.</span>
          </form>
          <div class="dialog_footer"></div>
        </div>
    </dialog>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }
  

export function createModalCadastre() {

    const modalHTML = `
    <dialog class="modal_container_register">
      <div class="modal_style">
        <div class="dialog_header">
          <img id="close" class="header__button--singup" src="./src/assets/Vector.svg" alt="close">
        </div>
        <form class="form__container">
          <h2>Cadastrar</h2>
          <input type="text" name="name" class="inputCadastro" placeholder="Nome">
          <input type="email" name="email" class="inputCadastro" placeholder="E-mail">
          <input type="password" name="password" class="inputCadastro" placeholder="Senha">
          <input type="text" name="avatar_url" class="inputCadastro" placeholder="Avatar">
          <button type="submit" class="btnCadastrar">Cadastrar</button>
          <span>Já tem cadastro? <span class="link">Clique aqui</span> para Logar.</span>
        </form>
        <div class="dialog_footer"></div>
      </div>
      </dialog>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

  }

export function modalDelet(){

        const modalDelet = `

        <dialog id="modalDelete">
            <input type="button" value="Deletar Conta" onclick="showModalDelet()" id="inputShow">
            <div id="modalDelet">
                <div id="contentDelet">
                    <div id="headerDelet">
                        <button onclick="hidenModalDelet()">
                            <span class="material-symbols-outlined">
                                cancel
                            </span>
                        </button>
                    </div>
                    <div id="bodyDelet">
                        <h1>Deseja mesmo deletar sua conta?</h1>
                        <button onclick="hidenModalDelet()" class="btn-modal" id="btn-cancelDelet">Não desejo deletar minha conta</button>
                        <button onclick="deletProfile()" class="btn-modal" id="btn-confirmDelet">Quero deletar minha conta</button>
                    </div>
                    <div id="footerDelet">

                    </div>
                </div>
            </div>
        </dialog>`

        document.querySelector("body").insertAdjacentHTML("beforeend", modalDelet)
}
