const GiangVienFormComponent = ({
  form,
  handleChange,
  handleReset,
  handleSubmit,
  updateItem,
}) => {
  return (
    <>
      <h1>
        Thông tin giảng viên hướng dẫn - {updateItem ? "Update" : "Add"} dữ liệu
      </h1>
      <form onSubmit={handleSubmit}>
        ID:
        <input
          type="text"
          style={{ margin: "10px" }}
          name="id"
          value={form.id}
          onChange={handleChange}
        />
        <br />
        Mã:
        <input
          type="text"
          style={{ margin: "10px" }}
          name="ma"
          value={form.ma}
          onChange={handleChange}
        />
        <br />
        Tên:
        <input
          type="text"
          style={{ margin: "10px" }}
          name="ten"
          value={form.ten}
          onChange={handleChange}
        />
        <br />
        Tuổi:
        <input
          type="text"
          style={{ margin: "10px" }}
          name="tuoi"
          value={form.tuoi}
          onChange={handleChange}
        />
        <br />
        Chuyên ngành:
        <select
          style={{ margin: "10px" }}
          name="chuyenNganh"
          value={form.chuyenNganh}
          onChange={handleChange}
        >
          <option value="Chuyên ngành 1">Chuyên ngành 1</option>
          <option value="Chuyên ngành 2">Chuyên ngành 2</option>
          <option value="Chuyên ngành 3">Chuyên ngành 3</option>
        </select>
        <br />
        Giới tính:
        <input
          type="radio"
          name="gioiTinh"
          value="true"
          checked={form.gioiTinh === true}
          onChange={handleChange}
        />
        Nam
        <input
          type="radio"
          name="gioiTinh"
          value="false"
          checked={form.gioiTinh === false}
          onChange={handleChange}
        />
        Nữ
        <br />
        Ngày sinh:
        <input
          type="date"
          name="ngaySinh"
          style={{ margin: "10px" }}
          value={form.ngaySinh}
          onChange={handleChange}
        />
        <br />
        <button type="submit">{updateItem ? "Update" : "Add"}</button>
        <button
          type="button"
          style={{ marginLeft: "20px" }}
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
      <br />
    </>
  );
};

export default GiangVienFormComponent;
