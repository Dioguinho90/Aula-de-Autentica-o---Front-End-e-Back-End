import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Sucesso from "./pages/Sucesso";
import ProtectedRoute from "./routes/ProtectedRoute";
import { validarToken } from "./services/api";