<template>
  <div class="our-approach">
    <p>
      Our approach prioritises solutions, pushing boundaries, with each project guided by the
      question “How can we enhance the value of your project?”
    </p>
  </div>
</template>

<style scoped>
.our-approach {
  background-color: var(--light);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 160px 16px;

  & p {
    text-align: center;
    font-size: var(--heading-4);
    font-weight: var(--font-bold);
  }
}

@media (min-width: 768px) {
  .our-approach {
    padding: 200px 32px;
    height: 600px;
  }
}

@media only screen and (min-width: 992px) {
  .our-approach {
    padding: 200px 300px;
    height: 300px;
  }
}
</style>
