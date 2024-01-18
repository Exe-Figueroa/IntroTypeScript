(() => {
  const login = (dto: { email: string, password: string }) => {
    console.log(dto.email, dto.password);
  }
  login({ email: 'cufa@mail.com', password: 'cufa123' });
})();
