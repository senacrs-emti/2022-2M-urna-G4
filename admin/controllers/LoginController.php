<?php

session_start();
require_once('./DatabaseController.php');

if (isset($_SESSION['user'])) {
  header("./index.php");
  exit;
}

if (!isset($_POST['username']) || !isset($_POST['password'])) {
  header('Location: /admin/login.php');
  exit;
}

handleLogin($_POST['username'], $_POST['password']);

function handleLogin($username, $password) {
  $db = new Database();
  $query = $db->singleQuery('SELECT `id`, `username`, `password`, `is_admin` as isAdmin FROM users WHERE username = :username AND is_deleted = false', compact('username'));

  if (!$query) {
    header('location: /admin/login.php');
    exit;
  }

  if (!password_verify($password, $query->password)) {
    header('Location: /admin/login.php');
    exit;
  }

  $_SESSION['user'] = $query;

  header('location: /admin/index.php');
}