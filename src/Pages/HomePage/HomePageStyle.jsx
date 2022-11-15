import styled from 'styled-components';

export const Text = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #f3ecec;
  min-height: 100vh;
  font-size: 15px;
  letter-spacing: 2px;
  padding: 10px 40px;
  background: linear-gradient(to bottom, #1463ce 0%, #1c6ea4 38%, #c4c505 100%);
  font-weight: bold;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 30px;
  }
`;

// @mixin mq($screen) {
//     $mobile: 480px;
//     $tablet: 768px;
//     $desktop: 1280px;
//     @if $screen==mobile-only {
//         @media screen and (max-width: #{$tablet - 0.02}) {
//             @content;
//         }
//     }
//     @else if $screen==mobile {
//         @media screen and (min-width: $mobile) {
//             @content;
//         }
//     }
//     @else if $screen==tablet-only {
//         @media screen and (min-width: $tablet) and (max-width: #{$desktop - 0.02}) {
//             @content;
//         }
//     }
//     @else if $screen==tablet {
//         @media screen and (min-width: $tablet) {
//             @content;
//         }
//     }
//     @else if $screen==desktop {
//         @media screen and (min-width: $desktop) {
//             @content;
//         }
//     }
//     @else if $screen==notDesktop {
//         @media screen and (max-width: #{$desktop - 0.02}) {
//             @content;
//         }
//     }
//     @else if $screen==retina {
//         @media screen and (min-device-pixel-ratio: 2),
//         screen and (-moz-min-device-pixel-ratio: 2),
//         screen and (-o-min-device-pixel-ratio: 2/1),
//         screen and (-webkit-min-device-pixel-ratio: 2),
//         screen and (min-resolution: 192dpi),
//         screen and (min-resolution: 2dppx) {
//             @content;
//         }
//     }
// }
