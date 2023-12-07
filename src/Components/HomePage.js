import React, { useState } from "react";
import "./css/HomePage.css";

function HomePage() {
  const [level, setLevel] = useState("grad");
  const [dept, setDept] = useState("ECE");
  const [courseNumber, setCourseNumber] = useState(0);
  const [editions, setEditions] = useState(5);

  const handleCheck = () => {
    console.log([level, dept, courseNumber, editions]);
  };

  return (
    <div className="homepage">
      <div className="homepage_navbar">UWaterloo Course Trends</div>

      <div className="homepage_trends">
        <div className="homepage_trends_input">
          <div className="homepage_trends_input_level">
            <label htmlFor="level">Level</label>
            <select
              name="level"
              size="2"
              id="level"
              onChange={(e) => setLevel(e.target.value)}
            >
              <option selected value="grad">
                grad
              </option>
              <option value="undergrad">undergrad</option>
            </select>
          </div>
          <div className="homepage_trends_input_dept">
            <label htmlFor="department">Department</label>
            <select
              name="department"
              size="5"
              id="department"
              onChange={(e) => setDept(e.target.value)}
            >
              <option value="ACC">ACC</option>
              <option value="ACINTY">ACINTY</option>
              <option value="ACTSC">ACTSC</option>
              <option value="AE">AE</option>
              <option value="AFM">AFM</option>
              <option value="AMATH">AMATH</option>
              <option value="ANTH">ANTH</option>
              <option value="APPLS">APPLS</option>
              <option value="ARABIC">ARABIC</option>
              <option value="ARBUS">ARBUS</option>
              <option value="ARCH">ARCH</option>
              <option value="ARCHL">ARCHL</option>
              <option value="ARTS">ARTS</option>
              <option value="ASL">ASL</option>
              <option value="ASTRN">ASTRN</option>
              <option value="AVIA">AVIA</option>
              <option value="BASE">BASE</option>
              <option value="BE">BE</option>
              <option value="BET">BET</option>
              <option value="BIOL">BIOL</option>
              <option value="BLKST">BLKST</option>
              <option value="BME">BME</option>
              <option value="BUS">BUS</option>
              <option value="CC">CC</option>
              <option value="CDNST">CDNST</option>
              <option value="CFM">CFM</option>
              <option value="CHE">CHE</option>
              <option value="CHEM">CHEM</option>
              <option value="CHINA">CHINA</option>
              <option value="CI">CI</option>
              <option value="CIVE">CIVE</option>
              <option value="CLAS">CLAS</option>
              <option value="CM">CM</option>
              <option value="CMW">CMW</option>
              <option value="CO">CO</option>
              <option value="COGSCI">COGSCI</option>
              <option value="COMM">COMM</option>
              <option value="COMMST">COMMST</option>
              <option value="COOP">COOP</option>
              <option value="CROAT">CROAT</option>
              <option value="CS">CS</option>
              <option value="CT">CT</option>
              <option value="DAC">DAC</option>
              <option value="DATSC">DATSC</option>
              <option value="DEI">DEI</option>
              <option value="DUTCH">DUTCH</option>
              <option value="EARTH">EARTH</option>
              <option value="EASIA">EASIA</option>
              <option value="ECDEV">ECDEV</option>
              <option selected value="ECE">
                ECE
              </option>
              <option value="ECON">ECON</option>
              <option value="EDMI">EDMI</option>
              <option value="EMLS">EMLS</option>
              <option value="ENBUS">ENBUS</option>
              <option value="ENGL">ENGL</option>
              <option value="ENTR">ENTR</option>
              <option value="ENVE">ENVE</option>
              <option value="ENVS">ENVS</option>
              <option value="ERS">ERS</option>
              <option value="EVST">EVST</option>
              <option value="FCIT">FCIT</option>
              <option value="FILM">FILM</option>
              <option value="FINE">FINE</option>
              <option value="FR">FR</option>
              <option value="GBDA">GBDA</option>
              <option value="GEMCC">GEMCC</option>
              <option value="GENE">GENE</option>
              <option value="GEOE">GEOE</option>
              <option value="GEOG">GEOG</option>
              <option value="GER">GER</option>
              <option value="GERON">GERON</option>
              <option value="GESC">GESC</option>
              <option value="GGOV">GGOV</option>
              <option value="GLOBAL">GLOBAL</option>
              <option value="GRK">GRK</option>
              <option value="GS">GS</option>
              <option value="GSJ">GSJ</option>
              <option value="HEALTH">HEALTH</option>
              <option value="HHUM">HHUM</option>
              <option value="HIST">HIST</option>
              <option value="HLTH">HLTH</option>
              <option value="HRM">HRM</option>
              <option value="HRTS">HRTS</option>
              <option value="HUMSC">HUMSC</option>
              <option value="INDENT">INDENT</option>
              <option value="INDEV">INDEV</option>
              <option value="INDG">INDG</option>
              <option value="INTEG">INTEG</option>
              <option value="INTST">INTST</option>
              <option value="ITAL">ITAL</option>
              <option value="ITALST">ITALST</option>
              <option value="JAPAN">JAPAN</option>
              <option value="JS">JS</option>
              <option value="KIN">KIN</option>
              <option value="KOREA">KOREA</option>
              <option value="LAT">LAT</option>
              <option value="LS">LS</option>
              <option value="MATBUS">MATBUS</option>
              <option value="MATH">MATH</option>
              <option value="ME">ME</option>
              <option value="MEDVL">MEDVL</option>
              <option value="MENN">MENN</option>
              <option value="MGMT">MGMT</option>
              <option value="MISC">MISC</option>
              <option value="MNS">MNS</option>
              <option value="MOHAWK">MOHAWK</option>
              <option value="MSCI">MSCI</option>
              <option value="MTE">MTE</option>
              <option value="MTHEL">MTHEL</option>
              <option value="MUSIC">MUSIC</option>
              <option value="NANO">NANO</option>
              <option value="NE">NE</option>
              <option value="OLRD">OLRD</option>
              <option value="OPTOM">OPTOM</option>
              <option value="ORLD">ORLD</option>
              <option value="PACS">PACS</option>
              <option value="PD">PD</option>
              <option value="PDARCH">PDARCH</option>
              <option value="PDPHRM">PDPHRM</option>
              <option value="PHARM">PHARM</option>
              <option value="PHIL">PHIL</option>
              <option value="PHYS">PHYS</option>
              <option value="PLAN">PLAN</option>
              <option value="PMATH">PMATH</option>
              <option value="PS">PS</option>
              <option value="PSCI">PSCI</option>
              <option value="PSYCH">PSYCH</option>
              <option value="QIC">QIC</option>
              <option value="REC">REC</option>
              <option value="REES">REES</option>
              <option value="RELC">RELC</option>
              <option value="RS">RS</option>
              <option value="RSCH">RSCH</option>
              <option value="RUSS">RUSS</option>
              <option value="SCBUS">SCBUS</option>
              <option value="SCI">SCI</option>
              <option value="SDS">SDS</option>
              <option value="SE">SE</option>
              <option value="SEQ">SEQ</option>
              <option value="SFM">SFM</option>
              <option value="SI">SI</option>
              <option value="SMF">SMF</option>
              <option value="SOC">SOC</option>
              <option value="SOCE">SOCE</option>
              <option value="SOCWK">SOCWK</option>
              <option value="SPAN">SPAN</option>
              <option value="SPCOM">SPCOM</option>
              <option value="STAT">STAT</option>
              <option value="STV">STV</option>
              <option value="SUSM">SUSM</option>
              <option value="SWK">SWK</option>
              <option value="SWREN">SWREN</option>
              <option value="SYDE">SYDE</option>
              <option value="TAX">TAX</option>
              <option value="THPERF">THPERF</option>
              <option value="TN">TN</option>
              <option value="TPM">TPM</option>
              <option value="TS">TS</option>
              <option value="UNDC">UNDC</option>
              <option value="UNIV">UNIV</option>
              <option value="UU">UU</option>
              <option value="UX">UX</option>
              <option value="VCULT">VCULT</option>
              <option value="WATER">WATER</option>
              <option value="WIL">WIL</option>
              <option value="WKRPT">WKRPT</option>
              <option value="WS">WS</option>
              <option value="YC">YC</option>
            </select>
          </div>
          <div className="homepage_trends_input_course_num">
            <label htmlFor="course_number">Course Number</label>
            <input
              type="number"
              name="course_number"
              id="course_number"
              onChange={(e) => setCourseNumber(e.target.value)}
            />
          </div>
          <div className="homepage_trends_input_editions">
            <label htmlFor="editions">Editions</label>
            <select
              name="editions"
              id="editions"
              size="3"
              onChange={(e) => setEditions(e.target.value)}
            >
              <option value="3">last three</option>
              <option selected value="5">
                last five
              </option>
              <option value="10">last ten</option>
            </select>
          </div>
          <div className="homepage_trends_input_btn">
            <button onClick={handleCheck}>Check</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
