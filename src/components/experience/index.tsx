import { useTranslation } from "react-i18next";
import { Container, Guion, TitleSection } from "../common";
import {
  ContainerSection,
  StyledHighlight,
  StyledTabButton,
  StyledTabList,
  StyledTabPanel,
  StyledTabPanels,
} from "./style";
import { useEffect, useRef, useState, KeyboardEvent } from "react";
import usePrefersReducedMotion from "../../hook/usePrefersReducedMotion";
import { srConfig, sr, KEY_CODES } from "../../utils";
import { CSSTransition } from "react-transition-group";

const jobsData = [
  {
    title: "Software Developer Frontend",
    url: "https://liftit.co/",
    company: "Liftit",
    range: "Jun 2022 - Nov 2023",
    html: `<ul>
            <li>Design and create software solutions for the implementation of the new microfrontend.</li>
            <li>Check the feasibility of software prototypes.</li>
            <li>Modify the code to fix bugs.</li>
          </ul>
    `,
  },
  {
    title: "Software Developer Frontend",
    url: "https://wacoservices.com/",
    company: "WACO Services",
    range: "May 2022 - Jul 2022",
    html: `<ul>
    <li>In Waco I work as a freelance frontend developer, in a project developed with react.</li>
   
  </ul>
`,
  },
  {
    title: "Software Developer Frontend",
    url: "https://www.muncher.com.co/",
    company: "MUNCHER",
    range: "Nov 2021 - Mar 2022",
    html: `<ul>
    <li>Design and create software solutions for the implementation of the new front end of the company.</li>
    <li>Check the feasibility of software prototypes..</li>
  
  </ul>
`,
  },
  {
    title: "Software Developer Freelance",
    url: "https://luismarioamorsanchez.netlify.app/",
    company: "Freelance",
    range: "Dic 2020 - Present",
    html: `<ul>
    <li>Design and create software solutions for the implementation of the new front end of the company.</li>
    <li>Check the feasibility of software prototypes..</li>
  
  </ul>
`,
  },
];

export const Experience = () => {
  const { t } = useTranslation();
  const [activeTabId, setActiveTabId] = useState<number>(0);
  const [tabFocus, setTabFocus] = useState<number | null>(null);
  const tabs = useRef<HTMLButtonElement[]>([]);
  const revealContainer = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const container = revealContainer.current;
    if (container) {
      sr?.reveal(container, srConfig());
    }
  }, [prefersReducedMotion]);

  const focusTab = () => {
    if (tabs.current.length === 0) {
      return;
    }

    let newIndex = tabFocus ?? 0;

    if (newIndex >= tabs.current.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = tabs.current.length - 1;
    }

    tabs.current[newIndex].focus();
    setTabFocus(newIndex);
  };

  useEffect(() => {
    focusTab();

    return () => {
      tabs.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabFocus]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP:
      case KEY_CODES.ARROW_DOWN: {
        if (e.currentTarget.getAttribute("role") === "tablist") {
          e.preventDefault();
          setTabFocus((prevFocus) =>
            prevFocus !== null
              ? prevFocus + (e.key === KEY_CODES.ARROW_UP ? -1 : 1)
              : 0
          );
        }
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <Container id="experience" center style={{ alignItems: "center" }}>
      <div>
        <TitleSection style={{ alignSelf: "start" }}>
          <Guion>-</Guion>
          {t("experience_section.title")}
        </TitleSection>
        <ContainerSection>
          <StyledTabList
            role="tablist"
            aria-label="Job tabs"
            onKeyDown={(e) => onKeyDown(e)}
          >
            {jobsData &&
              jobsData.length > 0 &&
              jobsData.map((item, i) => {
                const { company } = item;
                return (
                  <StyledTabButton
                    key={i}
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    ref={(el) => (tabs.current[i] = el as HTMLButtonElement)}
                    id={`tab-${i}`}
                    role="tab"
                    tabIndex={activeTabId === i ? 0 : -1}
                    aria-selected={activeTabId === i}
                    aria-controls={`panel-${i}`}
                  >
                    <span>{company}</span>
                  </StyledTabButton>
                );
              })}
            <StyledHighlight activeTabId={activeTabId} />
          </StyledTabList>

          <StyledTabPanels>
            {jobsData &&
              jobsData.map((item, i) => {
                const { title, url, company, range, html } = item;

                return (
                  <CSSTransition
                    key={i}
                    in={activeTabId === i}
                    timeout={250}
                    classNames="fade"
                  >
                    <StyledTabPanel
                      id={`panel-${i}`}
                      role="tabpanel"
                      tabIndex={activeTabId === i ? 0 : -1}
                      aria-labelledby={`tab-${i}`}
                      aria-hidden={activeTabId !== i}
                      hidden={activeTabId !== i}
                    >
                      <h3>
                        <span>{title}</span>
                        <span className="company">
                          &nbsp;@&nbsp;
                          <a
                            href={url}
                            className="item"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {company}
                          </a>
                        </span>
                      </h3>

                      <p className="range">{range}</p>

                      <div dangerouslySetInnerHTML={{ __html: html }} />
                    </StyledTabPanel>
                  </CSSTransition>
                );
              })}
          </StyledTabPanels>
        </ContainerSection>
      </div>
    </Container>
  );
};

export default Experience;
