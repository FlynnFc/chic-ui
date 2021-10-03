var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
export var StyledAvatar = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n    padding: 5px;\n    border-radius: 50%;\n    ", ";\n"], ["\n    display: block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n    padding: 5px;\n    border-radius: 50%;\n    ", ";\n"])), function (pr) { return pr.isActive && isActiveProp; });
var isActiveProp = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: linear-gradient(90deg, rgba(3,70,75,1) 0%, rgba(69,181,46,1) 35%, rgba(21,227,145,1) 100%);\n    &::before {\n        content: '';\n        display: block;\n        position: absolute;\n        top: -2px;\n        left: -2px;\n        z-index: -1;\n        width: calc(100% + 4px);\n        height: calc(100% + 4px);\n        border-radius: 50%;\n    }\n"], ["\n    background: linear-gradient(90deg, rgba(3,70,75,1) 0%, rgba(69,181,46,1) 35%, rgba(21,227,145,1) 100%);\n    &::before {\n        content: '';\n        display: block;\n        position: absolute;\n        top: -2px;\n        left: -2px;\n        z-index: -1;\n        width: calc(100% + 4px);\n        height: calc(100% + 4px);\n        border-radius: 50%;\n    }\n"])));
var commonStyles = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #eee;\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #eee;\n"])));
export var StyledImage = styled.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  object-fit: cover;\n"], ["\n  ", ";\n  object-fit: cover;\n"])), commonStyles);
export var StyledSpan = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n  ", ";\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 700;\n  ", ";\n"])), commonStyles);
export var StyledBadge = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: block;\n  position: absolute;\n  z-index: 1;\n  top: 3px;\n  right: 9px;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  background: #27c421;\n"], ["\n  display: block;\n  position: absolute;\n  z-index: 1;\n  top: 3px;\n  right: 9px;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  background: #27c421;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map