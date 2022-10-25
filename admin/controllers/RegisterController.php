<?php

session_start();
require_once('./DatabaseController.php');

if (isset($_SESSION['user'])) {
  unset($_SESSION['user']);
}

if (!isset($_POST['username']) || !isset($_POST['password']) || !isset($_POST['password2'])) {
  header('Location: /admin/register.php');
  exit;
}

if ($_POST['password'] != $_POST['password2']) {
  header('Location: /admin/register.php');
  exit;
}

handleRegister($_POST['username'], $_POST['password']);

function handleRegister($username, $password) {
  $db = new Database();

  $alreadyExistUser = $db->singleQuery('SELECT `id` FROM users WHERE username = :username', compact('username'));
  if ($alreadyExistUser) {
    header('Location: /admin/register.php');
    exit;
  }

  $password = password_hash($password, PASSWORD_DEFAULT);

  $db->query('INSERT INTO users (username, password, is_admin) VALUES (:username, :password, false)', compact('username', 'password'));
  
  $_SESSION['user'] = $db->singleQuery('SELECT `id`, `username`, `password`, `is_admin` as isAdmin FROM users WHERE username = :username', compact('username'));
  header('location: /admin/index.php');
}