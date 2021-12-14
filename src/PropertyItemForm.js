import React, { useState, useEffect } from "react";
import Axios from "axios";
import YearDropdown, { MonthDropdown } from "./components/DateDropdown";
import StructureDropdown from "./components/StructureDropdown";
function PropertyItemForm() {
  //   const [propertyInfo, setPropertyInfo] = useState({});
  //   useEffect(() => {

  //   }, [propertyInfo]);
  //   const submitForm = () => {
  //     Axios.post('http://localhost:8000/submitform/propertylist', propertyInfo)
  //   }
  //   const submitForm = () => {
  //       console.log(propertyInfo);
  //       Axios.post('http://localholst:8000/submitform/propertylist').then((response) => console.log(response)).catch((error) => console.log(error))
  //   }

  return (
    <div className="container">
      <form
        action="http://localhost:8000/submitform/propertylist"
        method="post"
      >
        <button className="btn btn-primary" type="submit">
          submit
        </button>
        <button
          className="btn btn-info btn-sm"
          style={{
            width: 120,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            marginTop: 20,
          }}
          disabled
        >
          <h5>面積</h5>
        </button>
        <div
          className="card"
          style={{ borderRadius: 0, borderColor: "#0dcaf0" }}
        >
          <div className="card-body"></div>
        </div>
        <button className="btn btn-primary" type="submit">
          submit
        </button>
        <button
          className="btn btn-info btn-sm"
          style={{
            width: 120,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            marginTop: 20,
          }}
          disabled
        >
          <h5>面積</h5>
        </button>
        <div
          className="card"
          style={{ borderRadius: 0, borderColor: "#0dcaf0" }}
        >
          <div className="card-body">
            <div className="col-md-3">
              <label htmlFor="measurement-method" className="col-form-label">
                面積計測方式
              </label>
              <select
                name="measurement-method"
                id="measurement-method"
                className="form-select"
              >
                <option value></option>
                <option value="1">壁芯</option>
                <option value="2">內法</option>
              </select>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label
                  htmlFor="private-area"
                  className="col-form-label"
                  style={{ color: "red" }}
                >
                  專有面積
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="private_area"
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">㎡</span>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <label htmlFor="balcony-area" className="col-form-label">
                  バルコニー（テラス）面積
                </label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" />
                  <div className="input-group-append">
                    <span className="input-group-text">㎡</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="yard-area" className="col-form-label">
                  專用庭院面積
                </label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" />
                  <div className="input-group-append">
                    <span className="input-group-text">㎡</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="lot-stake-area" className="col-form-label">
                  土地共有持分面積
                </label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" />
                  <div className="input-group-append">
                    <span className="input-group-text">㎡</span>
                  </div>
                  <span>（</span>
                  <input
                    type="number"
                    className="form-control lot-stake-numerator"
                    name="lot_stake_numerator"
                  />
                  <span> / </span>
                  <input
                    type="number"
                    className="form-control lot-stake-denominator"
                    name="lot_stake_denominator"
                  />
                  <span>）</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="lot-area" className="col-form-label">
                  開発面積／総面積
                </label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" />
                  <div className="input-group-append">
                    <span className="input-group-text">㎡</span>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <label htmlFor="construction-area" className="col-form-label">
                  建築面積
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="construction-area"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">㎡</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="floor-area" className="col-form-label">
                  延べ面積
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="floor-area"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">㎡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-info btn-sm"
          style={{
            width: 120,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            marginTop: 20,
          }}
          disabled
        >
          <h5>建物</h5>
        </button>
        <div
          className="card"
          style={{ borderRadius: 0, borderColor: "#0dcaf0" }}
        >
          <div className="card-body">
            <div className="col-md-3">
              <label htmlFor="structure" className="col-form-label">
                建物構造
              </label>
              <select name="structure" id="structure" className="form-select">
                <StructureDropdown />
                {/* <option value></option>
                <option value="1">木造</option>
                <option value="2">ブロック</option>
                <option value="3">鉄骨</option>
                <option value="4">RC</option>
                <option value="5">SRC</option>
                <option value="6">PC</option>
                <option value="7">HPC</option>
                <option value="8">軽量鉄骨</option>
                <option value="9">その他</option> */}
              </select>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="total-units" className="col-form-label">
                  総戸数
                </label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" />
                  <div className="input-group-append">
                    <span className="input-group-text">戶</span>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <label htmlFor="units-per-building" className="col-form-label">
                  棟総戸数
                </label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" />
                  <div className="input-group-append">
                    <span className="input-group-text">戶</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="total-buildings" className="col-form-label">
                  総棟数
                </label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" />
                  <div className="input-group-append">
                    <span className="input-group-text">棟</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="floors-above-ground" className="col-form-label">
                  地上階層
                </label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" />
                  <div className="input-group-append">
                    <span className="input-group-text">階</span>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <label
                  htmlFor="floors-beneath-ground"
                  className="col-form-label"
                >
                  地下階層
                </label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" />
                  <div className="input-group-append">
                    <span className="input-group-text">階</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="floor-located" className="col-form-label">
                  所在階
                </label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" />
                  <div className="input-group-append">
                    <span className="input-group-text">階</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label htmlFor="balcony-1-facing" className="col-form-label">
                  バルコニー方向（１）
                </label>
                <select
                  name="balcony-1-facing"
                  id="balcony-1-facing"
                  className="form-select"
                >
                  <option value></option>
                  <option value="1">北</option>
                  <option value="2">北東</option>
                  <option value="3">東</option>
                  <option value="4">南東</option>
                  <option value="5">南</option>
                  <option value="6">南西</option>
                  <option value="7">西</option>
                  <option value="8">北西</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="balcony-2-facing" className="col-form-label">
                  バルコニー方向（2）
                </label>
                <select
                  name="balcony-2-facing"
                  id="balcony-2-facing"
                  className="form-select"
                >
                  <option value></option>
                  <option value="1">北</option>
                  <option value="2">北東</option>
                  <option value="3">東</option>
                  <option value="4">南東</option>
                  <option value="5">南</option>
                  <option value="6">南西</option>
                  <option value="7">西</option>
                  <option value="8">北西</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="balcony-3-facing" className="col-form-label">
                  バルコニー方向（3）
                </label>
                <select
                  name="balcony-3-facing"
                  id="balcony-3-facing"
                  className="form-select"
                >
                  <option value></option>
                  <option value="1">北</option>
                  <option value="2">北東</option>
                  <option value="3">東</option>
                  <option value="4">南東</option>
                  <option value="5">南</option>
                  <option value="6">南西</option>
                  <option value="7">西</option>
                  <option value="8">北西</option>
                </select>
              </div>
            </div>
            <div className="row">
              <label htmlFor="completed-year" className="col-form-label">
                築年月
              </label>
              <div className="col-3 col-sm-3 col-lg-2 ">
                <div className="input-group">
                  <select
                    name="completed-year"
                    id="completed-year"
                    className="form-select"
                  >
                    <YearDropdown />
                  </select>
                  <div className="input-group-append">
                    <span className="input-group-text">年</span>
                  </div>
                </div>
                {/* <input
                  type="text"
                  name="completed-year"
                  className="form-control yearpicker"
                /> */}
              </div>
              <div className="col-4 col-sm-3 col-lg-2">
                <div className="input-group">
                  <select
                    name="completed-month"
                    id="completed-month"
                    className="form-select"
                  >
                    <MonthDropdown />
                    {/* <option value></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option> */}
                  </select>
                  <div className="input-group-append">
                    <span className="input-group-text">月</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4">
                <label htmlFor="addition-1-year" className="col-form-label">
                  增改築（1）年月
                </label>
                <div className="row">
                  <div className="col-6">
                    <div className="input-group">
                      <select
                        name="completed-year"
                        id="completed-year"
                        className="form-select"
                      >
                        <YearDropdown />
                      </select>
                      <div className="input-group-append">
                        <span className="input-group-text">年</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input-group">
                      <select name="" className="form-select" id="">
                        <MonthDropdown />
                      </select>
                      <div className="input-group-append">
                        <span className="input-group-text">月</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-8">
                <label htmlFor="addition-1-content" className="col-form-label">
                  履歷
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4">
                <label htmlFor="addition-2-year" className="col-form-label">
                  增改築（2）年月
                </label>
                <div className="row">
                  <div className="col-6">
                    <div className="input-group">
                      <select
                        name="completed-year"
                        id="completed-year"
                        className="form-select"
                      >
                        <YearDropdown />
                      </select>
                      <div className="input-group-append">
                        <span className="input-group-text">年</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input-group">
                      <select name="" className="form-select" id="">
                        <MonthDropdown />
                      </select>
                      <div className="input-group-append">
                        <span className="input-group-text">月</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-8">
                <label htmlFor="addition-3-content" className="col-form-label">
                  履歷
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-4">
                <label htmlFor="addition-2-year" className="col-form-label">
                  增改築（3）年月
                </label>
                <div className="row">
                  <div className="col-6">
                    <div className="input-group">
                      <select
                        name="completed-year"
                        id="completed-year"
                        className="form-select"
                      >
                        <YearDropdown />
                      </select>
                      <div className="input-group-append">
                        <span className="input-group-text">年</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input-group">
                      <select name="" className="form-select" id="">
                        <MonthDropdown />
                      </select>
                      <div className="input-group-append">
                        <span className="input-group-text">月</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-8">
                <label htmlFor="addition-1-content" className="col-form-label">
                  履歷
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-info btn-sm"
          style={{
            width: 120,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            marginTop: 20,
          }}
          disabled
        >
          <h5>間取</h5>
        </button>
        <div
          className="card"
          style={{ borderRadius: 0, borderColor: "#0dcaf0" }}
        >
          <div className="card-body">
            <div className="row mt-3">
              <div className="col-12 col-sm-4">
                <div className="row">
                  <label
                    htmlFor="unit-1-num-type"
                    className="form-label"
                    style={{ color: "red" }}
                  >
                    間取
                  </label>
                  <div className="col-3">
                    <input
                      type="text"
                      className="form-control"
                      name="unit_num"
                      required
                    />
                  </div>
                  <div className="col-6">
                    <select
                      name="unit_type"
                      id="unit-type"
                      className="form-select"
                      required
                    >
                      <option value></option>
                      <option value="1">ワンルーム</option>
                      <option value="2">K</option>
                      <option value="3">DK</option>
                      <option value="4">LK</option>
                      <option value="5">LDK</option>
                      <option value="6">SK</option>
                      <option value="7">SDK</option>
                      <option value="8">SLK</option>
                      <option value="9">SLDK</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-4">
                <div className="row">
                  <label
                    htmlFor="unit-1-location"
                    className="form-label"
                    name="unit-1-location"
                  >
                    部屋位置
                  </label>
                  <div className="col-6">
                    <select
                      name="corner-unit"
                      id="corner-unit"
                      className="form-select"
                    >
                      <option value></option>
                      <option value="1">角部屋</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-4">
                <div className="row">
                  <label
                    htmlFor="storage-num"
                    className="form-label"
                    name="storage-num"
                  >
                    納戸数
                  </label>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      name="storage-num"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-lg-6">
                <label htmlFor="floor-1-1" className="form-label">
                  （1）
                </label>
                <div className="row">
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-1-floor"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">階</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <select className="form-select" name="floor-1-1-type">
                      <option value></option>
                      <option value="1">和</option>
                      <option value="2">洋</option>
                      <option value="3">DK</option>
                      <option value="4">LDK</option>
                      <option value="5">L</option>
                      <option value="6">D</option>
                      <option value="7">K</option>
                      <option value="8">S</option>
                      <option value="9">その他</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-1-tsubo"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">畳</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-1-room-num"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">室</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <label htmlFor="floor-1-2" className="form-label">
                  （2）
                </label>
                <div className="row">
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-2-floor"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">階</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <select className="form-select" name="floor-1-2-type">
                      <option value></option>
                      <option value="1">和</option>
                      <option value="2">洋</option>
                      <option value="3">DK</option>
                      <option value="4">LDK</option>
                      <option value="5">L</option>
                      <option value="6">D</option>
                      <option value="7">K</option>
                      <option value="8">S</option>
                      <option value="9">その他</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-2-tsubo"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">畳</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-2-room-num"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">室</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-lg-6">
                <label htmlFor="floor-1-3" className="form-label">
                  （3）
                </label>
                <div className="row">
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-3-floor"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">階</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <select className="form-select" name="floor-1-3-type">
                      <option value></option>
                      <option value="1">和</option>
                      <option value="2">洋</option>
                      <option value="3">DK</option>
                      <option value="4">LDK</option>
                      <option value="5">L</option>
                      <option value="6">D</option>
                      <option value="7">K</option>
                      <option value="8">S</option>
                      <option value="9">その他</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-3-tsubo"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">畳</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-3-room-num"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">室</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <label htmlFor="floor-1-4" className="form-label">
                  （4）
                </label>
                <div className="row">
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-4-floor"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">階</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <select className="form-select" name="floor-1-4-type">
                      <option value></option>
                      <option value="1">和</option>
                      <option value="2">洋</option>
                      <option value="3">DK</option>
                      <option value="4">LDK</option>
                      <option value="5">L</option>
                      <option value="6">D</option>
                      <option value="7">K</option>
                      <option value="8">S</option>
                      <option value="9">その他</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-4-tsubo"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">畳</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-4-room-num"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">室</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-lg-6">
                <label htmlFor="floor-1-5" className="form-label">
                  （5）
                </label>
                <div className="row">
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-5-floor"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">階</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <select className="form-select" name="floor-1-5-type">
                      <option value></option>
                      <option value="1">和</option>
                      <option value="2">洋</option>
                      <option value="3">DK</option>
                      <option value="4">LDK</option>
                      <option value="5">L</option>
                      <option value="6">D</option>
                      <option value="7">K</option>
                      <option value="8">S</option>
                      <option value="9">その他</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-5-tsubo"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">畳</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-5-room-num"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">室</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <label htmlFor="floor-1-6" className="form-label">
                  （6）
                </label>
                <div className="row">
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-6-floor"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">階</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <select className="form-select" name="floor-1-6-type">
                      <option value></option>
                      <option value="1">和</option>
                      <option value="2">洋</option>
                      <option value="3">DK</option>
                      <option value="4">LDK</option>
                      <option value="5">L</option>
                      <option value="6">D</option>
                      <option value="7">K</option>
                      <option value="8">S</option>
                      <option value="9">その他</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-6-tsubo"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">畳</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-6-room-num"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">室</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-lg-6">
                <label htmlFor="floor-1-7" className="form-label">
                  （7）
                </label>
                <div className="row">
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-7-floor"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">階</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <select className="form-select" name="floor-1-7-type">
                      <option value></option>
                      <option value="1">和</option>
                      <option value="2">洋</option>
                      <option value="3">DK</option>
                      <option value="4">LDK</option>
                      <option value="5">L</option>
                      <option value="6">D</option>
                      <option value="7">K</option>
                      <option value="8">S</option>
                      <option value="9">その他</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-7-tsubo"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">畳</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="floor-1-7-room-num"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">室</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <label htmlFor="floor-1-others" className="form-label">
                  その他
                </label>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="floor-1-others"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-info btn-sm"
          style={{
            width: 120,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            marginTop: 20,
          }}
          disabled
        >
          <h5>現況</h5>
        </button>
        <div
          className="card"
          style={{ borderRadius: 0, borderColor: "#0dcaf0" }}
        >
          <div className="card-body">
            <div className="row mt-3">
              <div className="col-4 col-md-3">
                <label htmlFor="unit-situation" className="form-label">
                  現況
                </label>
                <select
                  name="unit_situation"
                  id="unit_situation"
                  className="form-select"
                >
                  <option value></option>
                  <option value="1">居住中</option>
                  <option value="2">空家</option>
                  <option value="3">賃貸中</option>
                  <option value="4">未完成</option>
                </select>
              </div>
              <div className="col-8 col-md-4">
                <label htmlFor="scheduled-completion" className="form-label">
                  完成予定年月（西暦）
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="scheduled-completion-year"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">年</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="scheduled-completion-month"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">月</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-info btn-sm"
          style={{
            width: 120,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            marginTop: 20,
          }}
          disabled
        >
          <h5>権利</h5>
        </button>
        <div
          className="card"
          style={{ borderRadius: 0, borderColor: "#0dcaf0" }}
        >
          <div className="card-body">
            <div className="row mt-3">
              <div className="col-4 col-md-3">
                <label htmlFor="lot-ownership" className="form-label">
                  土地権利
                </label>
                <select
                  name="lot_ownership"
                  id="lot_ownership"
                  className="form-select"
                >
                  <option value></option>
                  <option value="1">所有権</option>
                  <option value="2">旧法地上</option>
                  <option value="3">旧法賃借</option>
                  <option value="4">普通地上</option>
                  <option value="5">定期地上</option>
                  <option value="6">普通賃借</option>
                  <option value="7">定期賃借</option>
                </select>
              </div>
              <div className="col-4 col-md-3">
                <label htmlFor="additional-lot-right" className="form-label">
                  付帯権利
                </label>
                <select
                  name="additional-lot-right"
                  id="additional-lot-right"
                  className="form-select"
                >
                  <option value></option>
                  <option value="1">抵当権</option>
                  <option value="2">温泉利用</option>
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4 col-md-3">
                <label htmlFor="lot-rent" className="form-label">
                  借地料
                </label>
                <div className="input-group">
                  <input type="text" className="form-control" name="lot-rent" />
                  <div className="input-group-append">
                    <span className="input-group-text">万円</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <label htmlFor="lot-lease-term" className="form-label">
                  借地期間
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="scheduled-completion-year"
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text"
                      name="lot-lease-term-year"
                    >
                      年
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="scheduled-completion-month"
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text"
                      name="lot-lease-term-month"
                    >
                      月
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <label htmlFor="lot-lease-expiration" className="form-label">
                  借地期限（西暦）
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="scheduled-completion-year"
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text"
                      name="lot-lease-expiration-year"
                    >
                      年
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="scheduled-completion-month"
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text"
                      name="lot-lease-expiration-month"
                    >
                      月
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4 col-md-3">
                <label htmlFor="lot-lease" className="form-label">
                  定借権利金
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="lot-lease-premium"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">万円</span>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <label htmlFor="lot-lease" className="form-label">
                  定借保証金
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="lot-lease-margin"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">万円</span>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-3">
                <label htmlFor="lot-lease" className="form-label">
                  定借敷金
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="lot-lease-deposit"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">万円</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-info btn-sm"
          style={{
            width: 120,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            marginTop: 20,
          }}
          disabled
        >
          <h5>法規</h5>
        </button>
        <div
          className="card"
          style={{ borderRadius: 0, borderColor: "#0dcaf0" }}
        >
          <div className="card-body">
            <div className="row mt-3">
              <div className="col-4 col-md-3">
                <label htmlFor="law-notification" className="form-label">
                  国土法届出
                </label>
                <select
                  name="law-notification"
                  id="law-notification"
                  className="form-select"
                >
                  <option value></option>
                  <option value="1">要</option>
                  <option value="2">中</option>
                  <option value="3">不要</option>
                </select>
              </div>
              <div className="col-4 col-md-3">
                <label htmlFor="zoning-1" className="form-label">
                  用途地域１
                </label>
                <select name="zoning-1" id="zoning-1" className="form-select">
                  <option value></option>
                  <option value="1">一低</option>
                  <option value="2">二中</option>
                  <option value="3">二住</option>
                  <option value="4">近商</option>
                  <option value="5">商業</option>
                  <option value="6">準工</option>
                  <option value="7">工專</option>
                  <option value="8">二低</option>
                  <option value="9">一中</option>
                  <option value="10">一住</option>
                  <option value="11">準住</option>
                  <option value="12">田園</option>
                  <option value="13">無指定</option>
                </select>
              </div>
              <div className="col-4 col-md-3">
                <label htmlFor="zoning-2" className="form-label">
                  用途地域１
                </label>
                <select name="zoning-2" id="zoning-2" className="form-select">
                  <option value></option>
                  <option value="1">一低</option>
                  <option value="2">二中</option>
                  <option value="3">二住</option>
                  <option value="4">近商</option>
                  <option value="5">商業</option>
                  <option value="6">準工</option>
                  <option value="7">工專</option>
                  <option value="8">二低</option>
                  <option value="9">一中</option>
                  <option value="10">一住</option>
                  <option value="11">準住</option>
                  <option value="12">田園</option>
                  <option value="13">無指定</option>
                </select>
              </div>
              <div className="col-4 col-md-3">
                <label htmlFor="best-use-for" className="form-label">
                  最適用途
                </label>
                <select
                  name="best-use-for"
                  id="best-use-for"
                  className="form-select"
                >
                  <option value></option>
                  <option value="1">リゾート向</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PropertyItemForm;
