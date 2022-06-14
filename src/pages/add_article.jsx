import React, { useState } from "react";

const AddArticle = () => {

  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  const submitForReview = async ({ title, article }) => {
    await fetch("/api/create_pasta", {
      method: "POST",
      body: JSON.stringify({
        title,
        content: article
      })
    });
  };

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleArticleChange = (e) => setArticle(e.target.value);

  const handleSubmit = async (e) => {
    await submitForReview({ title, article });
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="container drop-shadow-[0px 0px 100px rgba(0, 0, 0, 0.05)] rounded-[32px] bg-white px-25 pb-25 md:pb-10 md:px-10 sm:px-5 sm:pb-10">

        <div className="text-center">
          <h3 className="text-md pt-15 font-bold">Добавь свою пасту</h3>
          <p>и когда-нибудь мы её посмотрим</p>
        </div>

        <div className="pb-7">
          <label className="text-sm font-bold" htmlFor="title">Заголовок пасты</label>
          <input className="w-full px-5 py-2 rounded-lg" type="text" id="title" required onChange={handleTitleChange} />
        </div>

        <label className="text-sm font-bold" htmlFor="article">
          Текст пасты
        </label>
        <div className="mt-1">
        <textarea
          className="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
          rows={15}
          name="article"
          id="article"
          required
          onChange={handleArticleChange}
        />
        </div>

        <input
          className="mt-10 block mx-auto items-center px-6 py-3 border-[2px] rounded-[15px] border-black text-base font-medium rounded-md shadow-sm text-black"
          type="submit"
          value={"Отправить на модерацию"}
        />
      </div>
    </form>
  );
};

export default AddArticle;