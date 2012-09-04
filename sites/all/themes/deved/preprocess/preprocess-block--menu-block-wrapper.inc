function menu_link__menu_block__3(array $variables) {
  $variables['classes_array'][] = 'menu-block-hi-' . $variables['delta'];
  $variables['classes_array'][] = 'menu-name-' . $variables['config']['menu_name'];
  $variables['classes_array'][] = 'parent-mlid-' . $variables['config']['parent_mlid'];
  $variables['classes_array'][] = 'menu-level-hello-' . $variables['config']['level'];
}